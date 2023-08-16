import { apiPublicClient } from "@/lib/clients";
import {
  IdentityResponse,
  LoginRequest,
  RegisterRequest,
} from "@/features/identity";

export async function login(request: LoginRequest) {
  const { data } = await apiPublicClient.post<IdentityResponse>(
    "api/v1/identities/login",
    request,
    { withCredentials: true },
  );
  return data;
}

export async function register(request: RegisterRequest) {
  const { data } = await apiPublicClient.post<IdentityResponse>(
    "api/v1/identities/register",
    request,
    { withCredentials: true },
  );
  return data;
}

export async function logout() {
  return await apiPublicClient.post("api/v1/identities/logout", undefined, {
    withCredentials: true,
  });
}
