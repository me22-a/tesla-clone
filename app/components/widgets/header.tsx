import Link from "next/link";
import TeslaIcon from "../icons/TeslaIcon";
import SupportIcon from "../icons/SupportIcon";
import EarthIcon from "../icons/EarthIcon";
import AccountIcon from "../icons/AccountIcon";
import Vehicle from "../dropdown/vehicle";
import Energy from "../dropdown/energy";
import Charging from "../dropdown/charging";
import Discover from "../dropdown/discover";
import Shop from "../dropdown/shop";

export default function Header() {
  return (
    <nav className="w-full fixed top-0 z-50">
      <div className=" px-6 py-4 grid grid-cols-2 md:grid-cols-3 group/item">
        <div className="  flex justify-start items-center pr-4 z-40 ">
          <Link
            href="/"
            aria-label="navbar-icon"
            className="group-hover/item:text-black"
          >
            <TeslaIcon />
          </Link>
        </div>

        <div className=" px-4 group/item max-lg:hidden">
          <ol className=" flex justify-center items-center space-x-3 ">
            {[
              { label: "Vehicles", href: "/", dropdown: <Vehicle /> },
              { label: "Energy", href: "/", dropdown: <Energy /> },
              { label: "Charging", href: "/", dropdown: <Charging /> },
              { label: "Discover", href: "/", dropdown: <Discover /> },
              { label: "Shop", href: "/", dropdown: <Shop /> },
            ].map((item) => (
              <li key={item.label} className="group/dropdown static">
                <Link
                  href={item.href}
                  className="py-2 px-3 text-sm font-semibold rounded relative group-hover/item:text-black   hover:bg-zinc-200 z-40"
                >
                  {item.label}
                </Link>
                <div className=" hidden group-hover/dropdown:block absolute overflow-scroll w-full h-max left-0 top-0">
                  {item.dropdown}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="max-md:hidden pl-4 z-40  max-lg:hidden">
          <ol className="flex justify-end items-center space-x-3">
            {[
              { icon: <SupportIcon />, href: "/" },
              { icon: <EarthIcon />, href: "/" },
              { icon: <AccountIcon />, href: "/" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  aria-label="navbar-icon"
                  className="group-hover/item:text-black"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
}
