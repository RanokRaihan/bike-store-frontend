import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user } = useAppSelector((state) => state.auth);
  const currentHour = new Date().getHours();

  let greeting;

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }
  return (
    <main className="min-h-content bg-gray-50">
      <div className=" container mx-auto  p-4">
        <p className="text-lg text-gray-500">{greeting}</p>
        <h1 className="text-2xl font-bold text-primary">{user?.name} </h1>
        <p>
          <span className="font-semibold">Email:</span> {user?.email}
        </p>
        <div>
          <p className="text-gray-500 mt-4">
            This is your profile page. You can view and edit your profile
            details here. More Info will be added soon.
          </p>
        </div>
        <div className="flex gap-4">
          <Button asChild variant="default" className="mt-4">
            <Link to="/orders">View orders</Link>
          </Button>
          <Button asChild variant="secondary" className="mt-4">
            <Link to="/change-password">Change Password</Link>
          </Button>
        </div>
      </div>
    </main>
  );
};

export default UserProfile;
