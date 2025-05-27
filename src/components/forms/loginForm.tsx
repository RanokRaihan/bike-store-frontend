import { verifyToken } from "@/lib/utils";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import loginSchema from "@/schemas/login.validation";
import { TError } from "@/types/error.types";
import { FormFieldType } from "@/types/global.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown, Shield, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import CustomFormField from "../ui/CustomFormField";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Form } from "../ui/form";
import SubmitButton from "../ui/SubmitButton";

// login form component
export function LoginForm() {
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Demo credentials
  const demoCredentials = {
    admin: {
      email: "ranok@gmail.com",
      password: "admin321",
    },
    member: {
      email: "ranokraihan@gmail.com",
      password: "123456",
    },
  };

  const populateForm = (role: "admin" | "member") => {
    const credentials = demoCredentials[role];
    form.setValue("email", credentials.email);
    form.setValue("password", credentials.password);
    toast.info(
      `${role.charAt(0).toUpperCase() + role.slice(1)} credentials populated`
    );
  };

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      const res = await login(values).unwrap();

      if (!res?.data?.accessToken) {
        throw new Error("No token found");
      }
      const user = verifyToken(res.data.accessToken);
      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Login success!");
      navigate(`/`);
    } catch (err) {
      const error = err as TError;
      console.log({ err });
      toast.error(error?.data?.message || "Login failed! ");
    }
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-balance text-sm text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>

        {/* Demo Credentials Dropdown */}
        <div className="flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                Demo Credentials
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              <DropdownMenuLabel className="text-center">
                Quick Login Options
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => populateForm("admin")}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Shield className="h-4 w-4 text-orange-500" />
                <div className="flex flex-col">
                  <span className="font-medium">Admin Account</span>
                  <span className="text-xs text-muted-foreground">
                    Full access to admin panel
                  </span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => populateForm("member")}
                className="flex items-center gap-2 cursor-pointer"
              >
                <User className="h-4 w-4 text-blue-500" />
                <div className="flex flex-col">
                  <span className="font-medium">Member Account</span>
                  <span className="text-xs text-muted-foreground">
                    Customer with shopping access
                  </span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

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
            name="password"
            label="Password"
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="password"
            placeholder="Enter your password"
          />
          <SubmitButton className="w-full" isLoading={isLoading}>
            Login
          </SubmitButton>
        </div>
        <div className="text-center text-sm flex justify-center gap-2">
          Don&apos;t have an account?
          <Link to="/register" className="underline underline-offset-4">
            Sign up
          </Link>
        </div>
      </form>
    </Form>
  );
}
