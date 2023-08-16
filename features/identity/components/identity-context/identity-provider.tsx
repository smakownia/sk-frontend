import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import {
  IdentityResponse,
  IdentityRole,
  isIdentityRole,
} from "@/features/identity";
import { IdentityContext } from "./identity-context";

type IdentityProviderProps = { children?: ReactNode };

export function IdentityProvider({ children }: IdentityProviderProps) {
  const [role, setRole] = useState<IdentityRole | null>();

  const isAuthenticated = useMemo(() => {
    if (role === undefined) return undefined;

    return Boolean(role);
  }, [role]);

  const login = useCallback(
    (data: IdentityResponse) => {
      setRole(data.role);
      localStorage.setItem(
        "identityExpires",
        data.expires.toLocaleDateString(),
      );
      localStorage.setItem("identityRole", data.role);
    },
    [setRole],
  );

  const logout = useCallback(() => {
    setRole(null);
    localStorage.removeItem("identityExpires");
    localStorage.removeItem("identityRole");
  }, [setRole]);

  useEffect(() => {
    const storedExpires = localStorage.getItem("identityExpires");
    const storedRole = localStorage.getItem("identityRole");

    if (!storedExpires || !storedRole) {
      return setRole(null);
    }

    const expires = new Date(storedExpires);

    if (
      isNaN(expires.getTime()) ||
      expires.getTime() < Date.now() ||
      !isIdentityRole(storedRole)
    ) {
      return logout();
    }

    setRole(storedRole);
  }, [setRole, logout]);

  return (
    <IdentityContext.Provider value={{ isAuthenticated, role, login, logout }}>
      {children}
    </IdentityContext.Provider>
  );
}
