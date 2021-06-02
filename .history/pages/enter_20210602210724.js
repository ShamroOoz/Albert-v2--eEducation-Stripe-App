import { useAuth } from "@/context/AuthContext";
import Layout from "@/components/Layout";
import { Formik, Form } from "formik";
import {
  initialValues,
  validationSchemaLogin,
} from "@/components/Formik/Schmes";
import FormikControl from "@/Components/Formik/FormikControl";

export default function enter() {
  const { user, signOut } = useAuth();
  return (
    <Layout>
      <main>
        {user ? <button onClick={signOut}>Sign Out</button> : <SignInButton />}
      </main>
    </Layout>
  );
}

// Sign in with Google button
function SignInButton() {
  const { signInWithGoogle } = useAuth();
  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={"/google.png"} /> Sign in with Google
    </button>
  );
}
