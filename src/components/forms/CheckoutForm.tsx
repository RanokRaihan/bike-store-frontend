import { useCreateOrderMutation } from "@/redux/features/order/order.api";
import { checkoutSchema } from "@/schemas/checkout.validation";
import { TError } from "@/types/error.types";
import { FormFieldType } from "@/types/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import CustomFormField from "../ui/CustomFormField";
import { Form } from "../ui/form";
import SubmitButton from "../ui/SubmitButton";

// login form component
export function CheckoutForm({ productId }: { productId: string }) {
  const [placeOrder, { isLoading }] = useCreateOrderMutation();

  const form = useForm<z.infer<typeof checkoutSchema>>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: "",
      address1: "",
      address2: "",
      postalCode: "",
      phone: "",
      city: "",
      country: "Bangladesh",
    },
  });
  const onSubmit = async (values: z.infer<typeof checkoutSchema>) => {
    const payload = {
      products: [
        {
          product: productId,
          quantity: 1,
        },
      ],
      address: values,
    };

    try {
      const res = await placeOrder(payload).unwrap();

      if (res?.success && res?.data?.checkout_url) {
        toast.success("Order placed! Redirecting to payment gateway...");
        window.location.href = res.data.checkout_url;
      } else {
        throw new Error("Order failed!");
      }
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message || "Order failed!");
      if (error?.data?.errorSources) {
        error.data.errorSources.forEach((source) => {
          if (
            form.getValues()[
              source.path as keyof z.infer<typeof checkoutSchema>
            ]
          ) {
            form.setError(source.path as keyof z.infer<typeof checkoutSchema>, {
              type: "manual",
              message: source.message,
            });
          } else {
            form.setError("root", {
              type: "manual",
              message: source.message,
            });
          }
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold text-primary">Checkout Form</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Fill in the form below to place the order
          </p>
        </div>
        <div className="grid gap-6">
          <CustomFormField
            name="fullName"
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="text"
            placeholder="jhon Doe"
            label="Full Name"
          />

          <CustomFormField
            name="address1"
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="text"
            placeholder="123 Main St"
            label="Address Line 1"
          />
          <CustomFormField
            name="address2"
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="text"
            placeholder="Optional"
            label="Address Line 2"
          />
          <CustomFormField
            name="postalCode"
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="text"
            placeholder="7110"
            label="Postal Code"
          />
          <CustomFormField
            name="phone"
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="text"
            placeholder="0123456789"
            label="Phone"
          />
          <CustomFormField
            name="city"
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="text"
            placeholder="Dhaka"
            label="City"
          />
          <CustomFormField
            name="country"
            disabled={true}
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="text"
            placeholder="Bangladesh"
            label="Country"
          />

          <SubmitButton className="w-full" isLoading={isLoading}>
            Procced to Payment
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
}
