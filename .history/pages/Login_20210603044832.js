import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { SignInComp } from "@/components/SignInComp";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AuthCheck } from "reactfire";
import { db } from "@/helpers/firebase";
import { fetchFromAPI } from "@/helpers/fetchFromAPI";

export default function Login() {
  const { user } = useAuth();

  const router = useRouter();

  // Fetch current subscriptions from the API
  const getSubscriptions = useCallback(async () => {
    // if (user) {
    //   const subs = await fetchFromAPI("subscriptions", { method: "GET" });
    //   setSubscriptions(subs);
    // }
    console.log("function is called");
  }, [user]);

  useEffect(() => {
    if (user) {
      getSubscriptions();
    }
  }, [user, getSubscriptions]);

  return (
    <Layout>
      <AuthCheck fallback={<SignInComp />}>
        <div className="well">
          <h2>Firestore Data</h2>
          <p>User's data in Firestore.</p>
          {user?.uid && <UserData user={user} />}
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
