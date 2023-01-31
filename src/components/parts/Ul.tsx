import { HTMLAttributes, ReactNode } from "react";

const Ul = ({
  children,
  ...props
}: HTMLAttributes<HTMLUListElement> & { children: ReactNode }) => {
  return (
    <ul className="divide-y-2 rounded border-2" {...props}>
      {children}
    </ul>
  );
};

export default Ul;
