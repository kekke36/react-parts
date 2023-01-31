import { ComponentPropsWithoutRef, forwardRef } from "react";

const Select = forwardRef<
  HTMLSelectElement,
  ComponentPropsWithoutRef<"select">
>(({ children, className, ...props }, ref) => {
  return (
    <select
      className={`w-full rounded border-2 px-1 py-1 ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </select>
  );
});

Select.displayName = "Select";
export default Select;
