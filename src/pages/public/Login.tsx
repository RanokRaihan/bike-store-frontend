import bikeSidebarImage from "@/assets/images/bike-sidebar.jpg";
import { LoginForm } from "@/components/forms/loginForm";

export default function Login() {
  return (
    <div className="grid min-h-[calc(100svh-80px)] lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src={bikeSidebarImage}
          alt="bike image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
