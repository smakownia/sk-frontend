import { ReactNode } from "react";

type FormGlobalError = {
  show: boolean;
  children?: ReactNode;
};

export function FormGlobalErrorMessage({ children, show }: FormGlobalError) {
  if (!show) return null;

  return (
    <div className="w-full p-4 rounded border border-red-500 text-red-500 bg-red-100">
      {children}
    </div>
  );
}
