import { Formik, Form } from "formik";
import {
  initialValues,
  validationSchemaLogin,
} from "./Formik/Schmes";
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
    }
    
    return (
      
  )
};
