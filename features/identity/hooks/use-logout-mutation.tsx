import { useMutation, useQueryClient } from "react-query";
import { logout, useIdentity } from "@/features/identity";

export function useLogoutMutation() {
  const queryClient = useQueryClient();
  const identity = useIdentity();

  return useMutation(logout, {
    onSuccess: () => {
      identity.logout();
      queryClient.invalidateQueries("basket");
    },
  });
}
