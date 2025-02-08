import { ChangePasswordForm } from "@/components/forms/ChangePasswordForm";

const ChangePassword = () => {
  return (
    <main className="min-h-content bg-gray-50">
      <div className=" container mx-auto  p-4">
        <h1 className="text-primary font-semibold text-2xl py-4 text-center">
          Change Password
        </h1>
        <p className="text-gray-500 text-sm text-center">
          You can change your password here. Please make sure to use a strong
          password.
        </p>
        <div className="max-w-md mx-auto my-4">
          <ChangePasswordForm />
        </div>
      </div>
    </main>
  );
};

export default ChangePassword;
