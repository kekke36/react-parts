import { ReactNode } from "react";

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="border-l-4 border-blue-300 px-3 py-1 text-3xl">
      {children}
    </h2>
  );
};

export default Title;
