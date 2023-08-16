import { useMutation } from "react-query";
import { register, useIdentity } from "@/features/identity";

export function useRegisterMutation() {
  const identity = useIdentity();

  return useMutation(register, {
    onSuccess: (data) => identity.login(data),
  });
}
