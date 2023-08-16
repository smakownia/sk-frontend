import { ReactNode } from "react";
import { useOpenClose } from "@/hooks";
import { LoginFormModalContext } from "./login-form-modal-context";
import { LoginFormModal } from "./login-form-modal";

type LoginFormModalProvider = {
  children?: ReactNode;
};

export function LoginFormModalProvider({ children }: LoginFormModalProvider) {
  const value = useOpenClose();

  return (
    <LoginFormModalContext.Provider value={value}>
      <LoginFormModal />
      {children}
    </LoginFormModalContext.Provider>
  );
}
