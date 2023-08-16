import { createContext } from "react";
import { useContextOrThrow, useOpenClose } from "@/hooks";

type RegisterFormModalContextType = null | ReturnType<typeof useOpenClose>;

export const RegisterFormModalContext =
  createContext<RegisterFormModalContextType>(null);

export function useRegisterFormModal() {
  return useContextOrThrow(RegisterFormModalContext);
}
