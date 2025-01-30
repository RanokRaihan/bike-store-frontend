import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import { useLogoutMutation } from "@/redux/features/auth/authApi";
import { logout } from "@/redux/features/auth/authSlice";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import logo from "../../assets/images/logo.svg";
import { Button } from "../ui/button";

const Navbar = () => {
  const [logoutApi, { isLoading }] = useLogoutMutation();
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    try {
      const res = await logoutApi(undefined).unwrap();
      if (res.success) {
        dispatch(logout());
        toast.success("Logout success!");
      }
    } catch (error) {
      console.log({ error });
      toast.error("Logout failed!");
    }
  };
  console.log(user);
  return (
    <header className="nav-height py-0 flex flex-col items-center justify-center border-b border-[#e5e5e5]">
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Bike logo" className="h-12" />
          </Link>
          <ul className="flex justify-between gap-4 text-lg text-[#272727]">
            <li>
              <Link to="/" className="hover:underline underline-offset-4">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline underline-offset-4">
                about
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="hover:underline underline-offset-4"
              >
                Products
              </Link>
            </li>
          </ul>
          {user ? (
            <div className="">
              <p className="font-semibold ">{user.email}</p>
              <Button
                variant="destructive"
                disabled={isLoading}
                onClick={handleLogout}
              >
                logout
              </Button>
            </div>
          ) : (
            <Button variant="outline" asChild>
              <Link to="/login">Login</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
