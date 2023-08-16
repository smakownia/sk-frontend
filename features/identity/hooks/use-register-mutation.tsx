import { useMutation, useQueryClient } from "react-query";
import { register, useIdentity } from "@/features/identity";

export function useRegisterMutation() {
  const queryClient = useQueryClient();
  const identity = useIdentity();

  return useMutation(register, {
    onSuccess: (data) => {
      identity.login(data);
      queryClient.invalidateQueries("basket");
    },
  });
}
