import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { SignInComp } from "@/components/SignInComp";

export default function login() {
  const { user, signOut } = useAuth();
  return (
    <main>
      {user ? <button onClick={signOut}>Sign Out</button> : <SignInComp />}
    </main>
  );
}
