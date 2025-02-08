import { z } from "zod";

export const checkoutSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  address1: z.string().min(1, "Address is required"),
  address2: z.string().optional(),
  postalCode: z
    .string()
    .regex(/^\d{4}$/, "Postal code must be 4 digits and numeric"),
  phone: z
    .string()
    .regex(/^01\d{9}$/, "Phone number must be 11 digits and start with 01"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});
