import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { SignInComp } from "@/components/SignInComp";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const { user, signOut } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (user) {
      router.push("/useraccount");
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
