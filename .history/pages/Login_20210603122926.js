import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { SignInComp } from "@/components/SignInComp";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { AuthCheck } from "reactfire";
import { db } from "@/helpers/firebase";
import { fetchFromAPI } from "@/helpers/fetchFromAPI";
import { NEXT_URL } from "@/config/index";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function Login() {
  const { user, cusmtomerId } = useAuth();
  const [subscriptions, setSubscriptions] = useState([]);
  const [plan, setPlan] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Fetch current subscriptions from the API
  const getSubscriptions = useCallback(async () => {
    if (user) {
      const subs = await fetchFromAPI(`${NEXT_URL}/subscriptions`, {
        method: "GET",
      });
      setSubscriptions(subs);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      getSubscriptions();
    }
  }, [user, getSubscriptions]);

  // Handle the submission of card details
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();

    const cardElement = elements.getElement(CardElement);

    // Create Payment Method
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      alert(error.message);
      setLoading(false);
      return;
    }

    // Create Subscription on the Server
    const subscription = await fetchFromAPI(`${NEXT_URL}/subscriptions`, {
      body: {
        plan,
        payment_method: paymentMethod.id,
      },
    });

    const { latest_invoice } = subscription;

    if (latest_invoice.payment_intent) {
      const { client_secret, status } = latest_invoice.payment_intent;

      if (status === "requires_action") {
        const { error: confirmationError } = await stripe.confirmCardPayment(
          client_secret
        );
        if (confirmationError) {
          console.error(confirmationError);
          alert("unable to confirm card");
          return;
        }
      }
      // success
      alert("You are subscribed!");
      getSubscriptions();
    }

    setLoading(false);
    setPlan(null);
  };

  return (
    <Layout>
      <main>
        {user ? (
          !cusmtomerId ? (
            <div>do something here</div>
          ) : (
            <div>do something here also here</div>
          )
        ) : (
          <SignInComp />
        )}
      </main>
    </Layout>
  );
}

function UserData(props) {
  const [data, setData] = useState({});

  // Subscribe to the user's data in Firestore
  useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .doc(props.user.uid)
      .onSnapshot((doc) => setData(doc.data()));
    return () => unsubscribe();
  }, [props.user]);

  return (
    <pre>
      Stripe Customer ID: {data.stripeCustomerId} <br />
      Subscriptions: {JSON.stringify(data.activePlans || [])}
    </pre>
  );
}
