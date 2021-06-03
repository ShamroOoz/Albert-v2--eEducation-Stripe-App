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
              <div className="flex flex-col items-center justify-center mt-16 space-y-8 lg:flex-row lg:items-stretch lg:space-x-8 lg:space-y-0">
                {plans?.map((plan) => (
                  <Pricing
                    key={plan.id}
                    plan={plan}
                    status={true}
                    setPlan={setPlan}
                  />
                ))}
              </div>
              <div class="flex items-center justify-center">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                  <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
                    <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div class="mt-8">
                      <p class="text-xl font-semibold my-2">App Development</p>
                      <div class="flex space-x-2 text-gray-400 text-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <p>Marketing Team</p>
                      </div>
                      <div class="flex space-x-2 text-gray-400 text-sm my-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p>1 Weeks Left</p>
                      </div>
                      <div class="border-t-2"></div>

                      <div class="flex justify-between">
                        <div class="my-2">
                          <p class="font-semibold text-base mb-2">
                            Team Member
                          </p>
                          <div class="flex space-x-2">
                            <img
                              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                              class="w-6 h-6 rounded-full"
                            />
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Woman_7.jpg"
                              class="w-6 h-6 rounded-full"
                            />
                            <img
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxSqK0tVELGWDYAiUY1oRrfnGJCKSKv95OGUtm9eKG9HQLn769YDujQi1QFat32xl-BiY&usqp=CAU"
                              class="w-6 h-6 rounded-full"
                            />
                          </div>
                        </div>
                        <div class="my-2">
                          <p class="font-semibold text-base mb-2">Progress</p>
                          <div class="text-base text-gray-400 font-semibold">
                            <p>34%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
