import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { SignInComp } from "@/components/SignInComp";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUser, AuthCheck } from "reactfire";

export default function Login() {
  const { user, signOut } = useAuth();
  const { data } = useUser();
  const router = useRouter();
  // useEffect(() => {
  //   if (user) {
  //     router.push("/useraccount");
  //   }
  // }, [user]);
  console.log(data);
  return (
    <Layout>
      {/* <main>
        {user ? <button onClick={signOut}>Sign Out</button> : <SignInComp />}
      </main> */}
    </Layout>
  );
}
