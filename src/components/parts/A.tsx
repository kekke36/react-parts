import { AnchorHTMLAttributes, ReactNode } from "react";

const A = ({
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) => {
  return (
    <a className="text-cyan-500" {...props}>
      {children}
    </a>
  );
};

export default A;
