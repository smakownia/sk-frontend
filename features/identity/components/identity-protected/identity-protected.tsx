import { ReactNode, useEffect } from "react";
import { useRouter } from "next/router";
import { IdentityRole, useIdentity } from "@/features/identity";

type IdentityProtectedProps = {
  children?: ReactNode;
  role?: IdentityRole;
};

export function IdentityProtected(props: IdentityProtectedProps) {
  const { children, role = IdentityRole.Customer } = props;

  const router = useRouter();
  const identity = useIdentity();

  useEffect(() => {
    if (identity.role !== undefined && identity.role != role) {
      router.push("/");
    }
  }, [router, identity, role]);

  if (identity.role != role) {
    return null;
  }

  return children;
}
