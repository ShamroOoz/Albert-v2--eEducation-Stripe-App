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
    <div className="w-10/12 m-auto my-5 bg-white shadow-xl lg:w-4/12 md:6/12">
      <div className="px-8 py-8 rounded-xl">
        <h1 className="text-2xl font-semibold text-center uppercase">login</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchemaLogin}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <FormikControl
                  control="input"
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="Email"
                />
                <FormikControl
                  control="input"
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Password"
                />
                <div className="flex justify-end my-2 text-xs text-gray-600 underline">
                  <a href="/pablo">Forget Password?</a>
                </div>

                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="btn-large"
                >
                  Login
                </button>
              </Form>
            );
          }}
        </Formik>
        <div className="flex items-center justify-center mt-5 md:justify-between">
          <div className="hidden w-4/12 bg-gray-300 md:block"></div>
          <p className="text-sm font-light text-gray-400 md:mx-2">or</p>
          <div className="hidden w-4/12 bg-gray-300 md:block"></div>
        </div>

        <div className="grid gap-2 md:grid-cols-2 mt-7">
          <div>
            <button className="w-full p-3 text-center text-white duration-300 bg-blue-900 rounded-sm hover:bg-blue-700">
              Facebook
            </button>
          </div>
          <div>
            <button className="w-full p-3 text-center text-white duration-300 bg-blue-400 rounded-sm hover:bg-blue-500">
              Twitter
            </button>
          </div>
        </div>
        <p className="mt-5 text-xs font-light text-center text-gray-400 ">
          Don’t have an account yet?
          <Link
            to="/singup"
            className="ml-2 font-medium tracking-tighter text-black underline"
          >
            SingUp
          </Link>
        </p>
      </div>
    </div>
  );
}