import { LabelHTMLAttributes, ReactNode } from "react";

const Label = ({
  children,
  ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { children: ReactNode }) => {
  return (
    <label className="font-bold" {...props}>
      {children}
    </label>
  );
};

export default Label;
