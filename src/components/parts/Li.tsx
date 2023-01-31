import { LiHTMLAttributes, ReactNode } from "react";

const Li = ({
  children,
  ...props
}: LiHTMLAttributes<HTMLLIElement> & { children: ReactNode }) => {
  return (
    <li className="px-2 py-1" {...props}>
      {children}
    </li>
  );
};

export default Li;
