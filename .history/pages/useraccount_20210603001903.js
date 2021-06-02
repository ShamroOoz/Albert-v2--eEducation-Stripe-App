import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";

export default function login() {
  const { user, signOut } = useAuth();
  return <Layout>user</Layout>;
}
