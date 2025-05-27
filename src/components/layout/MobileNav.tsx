import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="rounded-md size-8">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="text-left">Navigation Menu</SheetTitle>
        </SheetHeader>
        <SheetDescription className="sr-only">
          Select a page to navigate
        </SheetDescription>
        <ul className="flex flex-col  justify-between gap-4 text-lg text-[#272727] pl-4 py-8">
          <li className="hover:bg-gray-100 rounded-lg ">
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/videos">videos</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
