import { createContext } from "react";
import { useContextOrThrow } from "@/hooks";
import { IdentityResponse, IdentityRole } from "@/features/identity";

type IdentityContextType = null | {
  isAuthenticated?: boolean;
  role?: null | IdentityRole;
  login: (data: IdentityResponse) => void;
  logout: () => void;
};

export const IdentityContext = createContext<IdentityContextType>(null);

export function useIdentity() {
  return useContextOrThrow(IdentityContext);
}
