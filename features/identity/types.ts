export enum IdentityRole {
  Customer = "Customer",
  Admin = "Admin",
}

export type IdentityResponse = {
  role: IdentityRole;
  expires: Date;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  email: string;
  password: string;
};
