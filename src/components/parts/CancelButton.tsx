import { ButtonHTMLAttributes, ReactNode } from "react";

const CancelButton = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) => {
  return (
    <button
      className="min-w-[80px] rounded bg-gray-50 px-4 py-2 font-bold shadow transition hover:opacity-80"
      {...props}
    >
      {children}
    </button>
  );
};

export default CancelButton;
