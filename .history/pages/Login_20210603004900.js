import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { SignInComp } from "@/components/SignInComp";
import Useraccount from "./useraccount";
export default function login() {
  const { user } = useAuth();
  return (
    <Layout>
      <main>{user ? <Useraccount /> : <SignInComp />}</main>
    </Layout>
  );
}
