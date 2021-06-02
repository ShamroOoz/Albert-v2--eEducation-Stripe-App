import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { SignInComp } from "@/components/SignInComp";

const forgotpassword = () => {
  return (
    <Layout>
      <main>
        {user ? <button onClick={signOut}>Sign Out</button> : <SignInComp />}
      </main>
    </Layout>
  );
};

export default forgotpassword;
