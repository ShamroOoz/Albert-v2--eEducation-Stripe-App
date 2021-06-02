import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { SignInComp } from "@/components/SignInComp";

export default function Login() {
  const { user, signOut } = useAuth();
  return (
    <Layout>
      <main>
        {user ? <button onClick={signOut}>Sign Out</button> : <SignInComp />}
      </main>
    </Layout>
  );
}
