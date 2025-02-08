import { verifyToken } from "@/lib/utils";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useRegisterUserMutation } from "@/redux/features/user/user.api";
import { useAppDispatch } from "@/redux/hooks";
import { userRegistrationSchema } from "@/schemas/user.validation";
import { TError } from "@/types/error.types";
import { FormFieldType } from "@/types/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import CustomFormField from "../ui/CustomFormField";
import { Form } from "../ui/form";
import SubmitButton from "../ui/SubmitButton";

// login form component
export function RegistrationForm() {
  const [register, { isLoading: registerLoading }] = useRegisterUserMutation();
  const [login, { isLoading: loginLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof userRegistrationSchema>>({
    resolver: zodResolver(userRegistrationSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof userRegistrationSchema>) => {
    // eslint-disable-next-line no-unused-vars
    const { confirmPassword, ...data } = values; // eslint-disable-line @typescript-eslint/no-unused-vars
    try {
      const res = await register(data).unwrap();

      if (res.success) {
        toast.success("Registration success!");
        const loginRes = await login({
          email: values.email,
          password: values.password,
        }).unwrap();

        if (!loginRes?.data?.accessToken) {
          throw new Error("No token found");
        }
        const user = verifyToken(loginRes.data.accessToken);
        dispatch(setUser({ user, token: loginRes.data.accessToken }));
        toast.success("Login success!");
        navigate(`/`);
      } else {
        throw new Error("Registration failed");
      }
    } catch (err) {
      const error = err as TError;
      toast.error(error.message || "Registration failed! ");
      if (error?.data?.errorSources) {
        error.data.errorSources.forEach((source) => {
          if (
            form.getValues()[
              source.path as keyof z.infer<typeof userRegistrationSchema>
            ]
          ) {
            form.setError(
              source.path as keyof z.infer<typeof userRegistrationSchema>,
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
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Create an account</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Fill in the form below to create an account
          </p>
        </div>
        <div className="grid gap-6">
          <CustomFormField
            name="name"
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="text"
            placeholder="jhon Doe"
            label="Full Name"
          />
          <CustomFormField
            name="email"
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="email"
            placeholder="jhon@example.com"
            label="Email"
          />
          <CustomFormField
            name="password"
            label="Password"
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="password"
          />
          <CustomFormField
            name="confirmPassword"
            label="Confirm Password"
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="password"
          />
          <SubmitButton
            className="w-full"
            isLoading={registerLoading || loginLoading}
          >
            Register
          </SubmitButton>
        </div>
        <div className="text-center text-sm flex gap-2 justify-center">
          <span>Don&apos;t have an account?</span>

          <Link to="/login" className="underline underline-offset-4">
            Login
          </Link>
        </div>
      </form>
    </Form>
  );
}
