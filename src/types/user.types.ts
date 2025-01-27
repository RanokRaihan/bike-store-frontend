export type TUserPayload = {
  email: string;
  role: "customer" | "admin";
  iat: number;
  exp: number;
};
