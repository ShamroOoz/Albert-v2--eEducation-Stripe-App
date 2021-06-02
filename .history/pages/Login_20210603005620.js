import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { SignInComp } from "@/components/SignInComp";
import { useEffect } from "react";

export default function Login() {
  const { user, signOut } = useAuth();
  useEffect(() => {
    if (user) {
      console.log(user);
    }
  }, []);
  return (
    <Layout>
      <main>
        {user ? <button onClick={signOut}>Sign Out</button> : <SignInComp />}
      </main>
    </Layout>
  );
}
