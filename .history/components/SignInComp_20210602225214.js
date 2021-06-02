import { Formik, Form } from "formik";
import { initialValues, validationSchemaLogin } from "./Formik/Schmes";
import FormikControl from "./Formik/FormikControl";
import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Link from "next/link";

export const SignInComp = () => {
  const { signInWithGoogle, login, signup } = useAuth();
  const [autherror, setautherror] = useState(null);
  const [pagestatus, setpagestatus] = useState("");
  const router = useRouter();

  useEffect(() => {
    setpagestatus(router.pathname);
  }, []);

  const onSubmit = async (values, onSubmitProp) => {
    try {
      if (pagestatus === "/login") {
        await login(values);
      } else {
        await signup(values);
      }
      onSubmitProp.setSubmitting(false);
      onSubmitProp.resetForm();
    } catch (error) {
      setautherror(error);
      console.log(error);
    }
  };

  return (
    <div className="w-10/12 m-auto my-5 bg-white shadow-xl lg:w-4/12 md:6/12">
      <div className="px-8 py-8 rounded-xl">
        <h1 className="text-2xl font-semibold text-center uppercase">
          {router.pathname === "/login" ? "Login" : " Register"}
        </h1>

        {autherror && (
          <div className="mb-2 border-l-8 border-red-900 bg-red-50">
            <div className="flex items-center">
              <div className="p-2">
                <div className="flex items-center">
                  <div className="ml-2">
                    <XCircleIcon
                      className="w-8 h-8 mr-2 text-red-900 cursor-pointer"
                      type="button"
                      onClick={() => setautherror(null)}
                    />
                  </div>
                  <p className="px-6 py-4 text-lg font-semibold text-red-900">
                    Please fix the following errors.
                  </p>
                </div>
                <div className="px-16 mb-4">
                  <li className="text-sm font-bold text-red-500 text-md">
                    {autherror?.code}
                  </li>
                </div>
              </div>
            </div>
          </div>
        )}
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
                {router.pathname === "/login" && (
                  <div className="flex justify-end my-2 text-xs text-gray-600 underline">
                    <a href="/">Forget Password?</a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="w-full px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-indigo-600 border border-transparent rounded-md shadow-sm disabled:opacity-50 md:inline mt-2inline-flex whitespace-nowrap hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {router.pathname === "/login" ? "login" : " Singup"}
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

        <div className="grid grid-cols-2 gap-2 mt-7">
          <div>
            <button
              onClick={signInWithGoogle}
              className="w-full p-3 text-center text-white duration-300 bg-black rounded-sm hover:bg-gray-400"
            >
              <span className="flex items-center justify-center">
                <img src={"/google.png"} className="w-5 mr-3 h5" /> Sign in with
                Google
              </span>
            </button>
          </div>
        </div>
        <p className="mt-5 text-xs font-light text-center text-gray-400 ">
          Don’t have an account yet?
          <Link href="/singup">
            <a className="ml-2 font-medium tracking-tighter text-black underline">
              SingUp
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};
