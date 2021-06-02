import { Formik, Form } from "formik";
import Layout from "@/components/Layout";
import {
  initialValues,
  validationSchemaforgot,
} from "@/components/Formik/Schmes";
import FormikControl from "@/components/Formik/FormikControl";
import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

const forgotpassword = () => {
  const [autherror, setautherror] = useState("success");
  const { sendPasswordResetEmail } = useAuth();
  const router = useRouter();

  const onSubmit = async (values, onSubmitProp) => {
    try {
      await sendPasswordResetEmail(values);
      onSubmitProp.setSubmitting(false);
      onSubmitProp.resetForm();
      setautherror("success");
    } catch (error) {
      setautherror("failed");
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="w-10/12 m-auto my-5 bg-white shadow-xl lg:w-4/12 md:6/12">
        <div className="px-8 py-8 rounded-xl">
          <h1 className="text-2xl font-semibold text-center uppercase">
            Forgot password?
          </h1>
          <p className="mt-3 text-sm text-center">
            It is easy to forget your password. Fill in your e-mail address or
            telephone number below and we will send you a new password.
          </p>

          {autherror && (
            <div
              className=""
              className={`mb-2 border-l-8  bg-red-50r ${
                autherror === "success" ? "border-green-900" : "border-red-900"
              }`}
            >
              <div className="flex items-center">
                <div className="p-2">
                  <div className="flex items-center">
                    <div className="ml-2">
                      <XCircleIcon
                        className={`w-8 h-8 mr-2  cursor-pointer ${
                          autherror === "success"
                            ? "text-green-900"
                            : "text-red-900"
                        }`}
                        type="button"
                        onClick={() => setautherror(null)}
                      />
                    </div>
                  </div>
                  <div className="px-16 mb-4">
                    <li
                      className={`text-sm font-bold  text-md ${
                        autherror === "success"
                          ? "text-green-400"
                          : "text-red-500"
                      }`}
                    >
                      {autherror === "success"
                        ? "An email with a new password will be coming soon."
                        : "Something went wrong"}
                    </li>
                  </div>
                </div>
              </div>
            </div>
          )}
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchemaforgot}
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

                  <button
                    type="submit"
                    disabled={!formik.isValid}
                    className="w-full px-3 py-2 font-semibold text-center text-white transition-colors duration-200 transform bg-indigo-600 border border-transparent rounded-md shadow-sm disabled:opacity-50 md:inline mt-2inline-flex whitespace-nowrap hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send
                  </button>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </Layout>
  );
};

export default forgotpassword;
