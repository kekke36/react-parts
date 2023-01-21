import { ReactNode, SelectHTMLAttributes } from "react";

const Select = ({
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) => {
  return (
    <select className="w-full rounded border-2 px-1 py-1" {...props}>
      {children}
    </select>
  );
};

export default Select;
