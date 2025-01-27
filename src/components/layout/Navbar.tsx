import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="p-4">
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
          </ul>
          <Button variant="outline" asChild>
            <Link to="/login">Login</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
