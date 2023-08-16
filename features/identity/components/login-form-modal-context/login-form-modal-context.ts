import { createContext } from "react";
import { useContextOrThrow, useOpenClose } from "@/hooks";

type LoginFormModalContextType = null | ReturnType<typeof useOpenClose>;

export const LoginFormModalContext =
  createContext<LoginFormModalContextType>(null);

export function useLoginFormModal() {
  return useContextOrThrow(LoginFormModalContext);
}
