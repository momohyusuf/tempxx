import { NavLink } from "react-router";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="shadow-md">
      <section className="container mx-auto flex justify-between items-center p-4">
        <NavLink to={"/"}>
          <h1 className="font-bold tracking-wide text-2xl">LG-Shoes</h1>
        </NavLink>

        <div className="flex gap-4 text-gray-500 font-medium">
          <NavLink
            className={
              "hover:text-black transition-colors duration-500 text-lg"
            }
            to={"/products"}
          >
            Marketplace
          </NavLink>
          <NavLink
            className={"hover:text-black transition-colors duration-500"}
            to={"/cart"}
          >
            <ShoppingCart strokeWidth={2.5} />
          </NavLink>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
