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
  const [plan, setPlan] = useState();
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);

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
                <h1 className="my-4 text-2xl font-normal md:text-3xl lg:text-4xl">
                  Select <span className="font-semibold">plans</span> for your{" "}
                  <span className="font-semibold">strategies</span>
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
                {plans?.map((plan) => (
                  <Pricing
                    key={plan.id}
                    plan={plan}
                    status={true}
                    setPlan={setPlan}
                  />
                ))}
              </div>
              <form onSubmit={handleSubmit} hidden={!plan}>
                <section className="text-gray-200 bg-gray-900 ">
                  <div className="max-w-6xl px-5 py-24 mx-auto ">
                    <div className="mb-20 text-center">
                      <h1 className="mb-4 text-4xl font-extrabold leading-10 tracking-tight title-font sm:text-5xl sm:leading-none md:text-6xl">
                        Payment Gateway
                      </h1>
                      <p className="mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4"></p>
                      <div className="flex justify-center mt-6">
                        <div className="inline-flex w-16 h-1 bg-indigo-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </section>
              </form>
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
