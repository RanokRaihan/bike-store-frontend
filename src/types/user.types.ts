export type TUserPayload = {
  _id: string;
  email: string;
  role: "customer" | "admin";
  iat: number;
  exp: number;
};
