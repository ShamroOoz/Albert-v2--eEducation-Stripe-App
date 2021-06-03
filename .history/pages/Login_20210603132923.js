import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { SignInComp } from "@/components/SignInComp";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { fetchFromAPI } from "@/helpers/fetchFromAPI";
import { NEXT_URL } from "@/config/index";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { plans } from "@/helpers/Data";
import { Pricing } from "@/components/Pricing";

export default function Login() {
  const { user, activeplan, setSubscriptions } = useAuth();

  console.log(activeplan);
  const [plan, setPlan] = useState();
  const stripe = useStripe();
  const elements = useElements();

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
          !activeplan || activeplan.length < 0 ? (
            <>
              <div className="text-center">
                <h1 className="mb-4 text-2xl font-normal md:text-3xl lg:text-4xl">
                  Our <span className="font-semibold">plans</span> for your{" "}
                  <span className="font-semibold">strategies</span>
                </h1>
                <p className="text-sm font-normal text-gray-400">
                  See below our main two plans for your startup.
                </p>
                <p className="text-sm font-normal text-gray-400">
                  It start from here! You can teach yourself what you really
                  like.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
                {plans?.map((plan) => (
                  <Pricing key={plan.id} plan={plan} />
                ))}
              </div>
            </>
          ) : (
            <div>Go to dashboard</div>
          )
        ) : (
          <SignInComp />
        )}
      </main>
    </Layout>
  );
}

function UserData() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/useraccount");
    }
  }, []);
  return <pre>userdata</pre>;
}