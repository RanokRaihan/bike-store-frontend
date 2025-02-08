export type TUserPayload = {
  _id: string;
  name: string;
  email: string;
  role: "customer" | "admin";
  iat: number;
  exp: number;
};

export type TUser = {
  _id: string;
  name: string;
  email: string;
  role: "customer" | "admin";
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
