import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function Input(props) {
  const { label, name, ...rest } = props;
  return (
    <div className="my-3 text-sm">
      <label htmlFor={name} className="block text-black">
        {label}:
      </label>
      <Field
        id={name}
        name={name}
        className="w-full px-4 py-3 mt-3 bg-gray-100 rounded-sm focus:outline-none"
        {...rest}
      />
      <ErrorMessage component={TextError} name={name} />
    </div>
  );
}
export default Input;
