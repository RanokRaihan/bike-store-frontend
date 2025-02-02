import { z } from "zod";

const addProductSchema = z.object({
  brand: z.string().min(1, "Product Brand is required"),
  model: z.string().min(1, "Product Model is required"),
  description: z.string().min(1, "Product Description is required"),
  price: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, "Price must be a positive number"),
  quantity: z.string().regex(/^\d+$/, "Quantity must be a positive number"),
  discount: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, "Discount must be a number between 0 and 100")
    .refine((discount) => {
      const discountValue = parseFloat(discount);
      return discountValue >= 0 && discountValue <= 100;
    }, "Discount must be a number between 0 and 100"),

  category: z.enum(["Mountain", "Road", "Hybrid", "Electric"]),
});

export default addProductSchema;
