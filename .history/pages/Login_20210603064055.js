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
