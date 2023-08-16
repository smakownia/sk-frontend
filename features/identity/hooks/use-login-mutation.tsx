import { useMutation } from "react-query";
import { login, useIdentity } from "@/features/identity";

export function useLoginMutation() {
  const identity = useIdentity();

  return useMutation(login, {
    onSuccess: (data) => {
      identity.login(data);
    },
  });
}
