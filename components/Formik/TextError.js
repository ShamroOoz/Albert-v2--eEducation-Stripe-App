import React from "react";

function TextError(props) {
  return (
    <span className="flex items-center mt-1 ml-1 text-xs font-medium tracking-wide text-red-500">
      {props.children}
    </span>
  );
}

export default TextError;
