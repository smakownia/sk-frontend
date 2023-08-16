import { useMutation, useQueryClient } from "react-query";
import { login, useIdentity } from "@/features/identity";

export function useLoginMutation() {
  const queryClient = useQueryClient();
  const identity = useIdentity();

  return useMutation(login, {
    onSuccess: (data) => {
      identity.login(data);
      queryClient.invalidateQueries("basket");
    },
  });
}
