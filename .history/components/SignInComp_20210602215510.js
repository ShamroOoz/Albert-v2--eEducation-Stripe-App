import { Formik, Form } from "formik";
import { initialValues, validationSchemaLogin } from "./Formik/Schmes";
import FormikControl from "./Formik/FormikControl";
import { useAuth } from "@/context/AuthContext";

export const SignInComp = () => {
  const { signInWithGoogle } = useAuth();

  const onSubmit = async (values, onSubmitProp) => {
    console.log(values);
    //   try {
    //     await login(values);
    //     onSubmitProp.setSubmitting(false);
    //     onSubmitProp.resetForm();
    //     history.push("/");
    //   } catch (error) {
    //     console.log(error);
    //   }
  };

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
                  <a href="/">Forget Password?</a>
                </div>

                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="block w-full p-3 text-center text-white duration-300 bg-gray-800 rounded-sm hover:bg-black disabled:opacity-50"
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
            <button className="w-full p-3 text-center text-white duration-300 bg-black rounded-sm hover:bg-blue-700">
              <span className="flex items-center justify-center">
                <img src={"/google.png"} className="max-w-sm" /> Sign in with
                Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
