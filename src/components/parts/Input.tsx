import { ComponentPropsWithoutRef, forwardRef } from "react";

const Input = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={`w-full rounded border-2 px-2 py-1 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
export default Input;
