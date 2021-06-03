import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { SignInComp } from "@/components/SignInComp";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser, AuthCheck } from "reactfire";

export default function Login() {
  const { user, signOut } = useAuth();

  const router = useRouter();
  // useEffect(() => {
  //   if (user) {
  //     router.push("/useraccount");
  //   }
  // }, [user]);

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
