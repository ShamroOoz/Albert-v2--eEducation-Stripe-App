import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";

export default function Useraccount() {
  const { user, signOut } = useAuth();
  return <Layout>user</Layout>;
}
