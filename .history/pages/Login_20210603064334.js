import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { SignInComp } from "@/components/SignInComp";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { AuthCheck } from "reactfire";
import { db } from "@/helpers/firebase";
import { fetchFromAPI } from "@/helpers/fetchFromAPI";
import { NEXT_URL } from "@/config/index";

export default function Login() {
  const { user } = useAuth();
  const [subscriptions, setSubscriptions] = useState([]);
  const [plan, setPlan] = useState();
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
    const subscription = await fetchFromAPI("subscriptions", {
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
      <AuthCheck fallback={<SignInComp />}>
        <div className="well">{user?.uid && <UserData user={user} />}</div>
        <hr />

        <div className="well">
          <h3>Step 1: Choose a Plan</h3>

          <button
            className={
              "btn " +
              (plan === "price_1IuoRsLMgvU1cp6Vs9WYSbFH"
                ? "btn-primary"
                : "btn-outline-primary")
            }
            onClick={() => setPlan("price_1IuoRsLMgvU1cp6Vs9WYSbFH")}
          >
            Choose Monthly $25/m
          </button>

          <button
            className={
              "btn " +
              (plan === "price_1IuoRsLMgvU1cp6VJ5Xw8PxR"
                ? "btn-primary"
                : "btn-outline-primary")
            }
            onClick={() => setPlan("price_1IuoRsLMgvU1cp6VJ5Xw8PxR")}
          >
            Choose Quarterly $50/q
          </button>

          <p>
            Selected Plan: <strong>{plan}</strong>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="well" hidden={!plan}>
          <h3>Step 2: Submit a Payment Method</h3>
          <p>Collect credit card details</p>
          <p>
            Normal Card: <code>4242424242424242</code>
          </p>
          <p>
            3D Secure Card: <code>4000002500003155</code>
          </p>

          <hr />

          <CardElement />
          <button className="btn btn-success" type="submit" disabled={loading}>
            Subscribe & Pay
          </button>
        </form>
      </AuthCheck>
      {/* <main>
        {user ? <button onClick={signOut}>Sign Out</button> : <SignInComp />}
      </main> */}
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
