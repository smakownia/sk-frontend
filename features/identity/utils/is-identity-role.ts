import { IdentityRole } from "@/features/identity";

export function isIdentityRole(value: string): value is IdentityRole {
  return Object.values(IdentityRole).includes(value as IdentityRole);
}
