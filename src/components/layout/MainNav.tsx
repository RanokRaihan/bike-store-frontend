import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <>
      <ul className=" justify-between gap-4 text-lg text-[#272727]  flex">
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
          <Link to="/products" className="hover:underline underline-offset-4">
            Products
          </Link>
        </li>
      </ul>
    </>
  );
};

export default MainNav;
