import * as Yup from "yup";

export const initialValues = {
  username: "",
  email: "",
  password: "",
};

export const validationSchemasingUp = Yup.object({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});

export const validationSchemaLogin = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().required("Required"),
});
