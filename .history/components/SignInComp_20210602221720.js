import { Formik, Form } from "formik";
import { initialValues, validationSchemaLogin } from "./Formik/Schmes";
import FormikControl from "./Formik/FormikControl";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/solid";

export const SignInComp = () => {
  const { signInWithGoogle, login } = useAuth();
  const [autherror, setautherror] = useState();
  const onSubmit = async (values, onSubmitProp) => {
    try {
      await login(values);
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
        <h1 className="text-2xl font-semibold text-center uppercase">login</h1>
        {autherror && (
          <div class="bg-red-50 border-l-8 border-red-900 mb-2">
            <div class="flex items-center">
              <div class="p-2">
                <div class="flex items-center">
                  <div class="ml-2">
                    <XCircleIcon class="h-8 w-8 text-red-900 mr-2 cursor-pointer" />
                  </div>
                  <p class="px-6 py-4 text-red-900 font-semibold text-lg">
                    Please fix the following errors.
                  </p>
                </div>
                <div class="px-16 mb-4">
                  <li class="text-md font-bold text-red-500 text-sm">
                    Name field is required.
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
                <div className="flex justify-end my-2 text-xs text-gray-600 underline">
                  <a href="/">Forget Password?</a>
                </div>

                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="w-full px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-indigo-600 border border-transparent rounded-md shadow-sm disabled:opacity-50 md:inline mt-2inline-flex whitespace-nowrap hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

        <div className="grid">
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
      </div>
    </div>
  );
};
