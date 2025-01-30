import { clsx, type ClassValue } from "clsx";
import { jwtDecode } from "jwt-decode";
import { twMerge } from "tailwind-merge";
import { TUserPayload } from "./../types/user.types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const verifyToken = (token: string): TUserPayload => {
  return jwtDecode(token);
};
