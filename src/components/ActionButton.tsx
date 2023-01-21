import { ButtonHTMLAttributes, ReactNode } from "react";

const ActionButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) => {
  return (
    <button
      className="min-w-[80px] rounded bg-blue-500 px-4 py-2 font-bold text-white shadow transition hover:opacity-80"
      {...props}
    >
      {children}
    </button>
  );
};

export default ActionButton;
