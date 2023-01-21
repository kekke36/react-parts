import { InputHTMLAttributes } from "react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className="w-full rounded border-2 px-2 py-1" {...props} />;
};

export default Input;
