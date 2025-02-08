import { z } from "zod";

export const userRegistrationSchema = z
  .object({
    name: z
      .string({ required_error: "Name is required" })
      .min(2, { message: "Name must be at least 2 characters long" }),
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid email address" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z.string({
      required_error: "Confirm Password is required",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const changePasswordSchema = z
  .object({
    email: z
      .string({ required_error: "Email is required" })
      .email({ message: "Invalid email address" }),
    oldPassword: z
      .string({ required_error: "Old Password is required" })
      .min(6, { message: "Old Password must be at least 6 characters long" }),
    newPassword: z
      .string({ required_error: "New Password is required" })
      .min(6, { message: "New Password must be at least 6 characters long" }),
    confirmNewPassword: z.string({
      required_error: "Confirm New Password is required",
    }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "New passwords don't match",
    path: ["confirmNewPassword"],
  });
