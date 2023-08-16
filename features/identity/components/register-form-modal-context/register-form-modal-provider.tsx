import { ReactNode } from "react";
import { useOpenClose } from "@/hooks";
import { RegisterFormModalContext } from "./register-form-modal-context";
import { RegisterFormModal } from "./register-form-modal";

type RegisterFormModalProviderProps = { children?: ReactNode };

export function RegisterFormModalProvider(
  props: RegisterFormModalProviderProps,
) {
  const { children } = props;
  const value = useOpenClose();

  return (
    <RegisterFormModalContext.Provider value={value}>
      <RegisterFormModal />
      {children}
    </RegisterFormModalContext.Provider>
  );
}
