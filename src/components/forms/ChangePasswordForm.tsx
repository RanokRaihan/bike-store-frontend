import { logout } from "@/redux/features/auth/authSlice";
import { useChangePasswordMutation } from "@/redux/features/user/user.api";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changePasswordSchema } from "@/schemas/user.validation";
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
export function ChangePasswordForm() {
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      email: user?.email || "",
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof changePasswordSchema>) => {
    // eslint-disable-next-line no-unused-vars
    const { confirmNewPassword, ...data } = values; // eslint-disable-line @typescript-eslint/no-unused-vars
    try {
      const res = await changePassword(data).unwrap();

      if (res.success) {
        toast.success("Password changed successfully!");

        dispatch(logout());
        toast.info("Login Now!");
      } else {
        throw new Error("change password failed");
      }
    } catch (err) {
      const error = err as TError;
      toast.error(error?.data?.message || "change password failed! ");
      if (error?.data?.errorSources) {
        error.data.errorSources.forEach((source) => {
          if (
            form.getValues()[
              source.path as keyof z.infer<typeof changePasswordSchema>
            ]
          ) {
            form.setError(
              source.path as keyof z.infer<typeof changePasswordSchema>,
              {
                type: "manual",
                message: source.message,
              }
            );
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
        <div className="grid gap-6">
          <CustomFormField
            name="email"
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="email"
            placeholder="jhon@example.com"
            label="Email"
          />
          <CustomFormField
            name="oldPassword"
            label="Old Password"
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="password"
          />
          <CustomFormField
            name="newPassword"
            label="New Password"
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="password"
          />
          <CustomFormField
            name="confirmNewPassword"
            label="Confirm New Password"
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="password"
          />
          <SubmitButton className="w-full" isLoading={isLoading}>
            change password
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
}
