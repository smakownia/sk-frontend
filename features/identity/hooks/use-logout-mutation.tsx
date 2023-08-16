import { useMutation } from "react-query";
import { logout, useIdentity } from "@/features/identity";

export function useLogoutMutation() {
  const identity = useIdentity();

  return useMutation(logout, {
    onSuccess: () => identity.logout(),
  });
}
