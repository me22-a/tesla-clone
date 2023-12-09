import Link from "next/link";
import TeslaIcon from "../icons/TeslaIcon";
import SupportIcon from "../icons/SupportIcon";
import EarthIcon from "../icons/EarthIcon";
import AccountIcon from "../icons/AccountIcon";

export default function Header() {
  return (
    <nav className="w-full fixed top-0 z-50">
      <div className="px-6 py-4 grid grid-cols-2 md:grid-cols-3 text-white">
        <div className="flex justify-start items-center pr-4">
          <Link href="/" aria-label="navbar-icon">
            <TeslaIcon />
          </Link>
        </div>

        <div className="max-md:hidden px-4">
          <ol className="flex justify-center items-center space-x-3">
            {[
              { label: "Vehicles", href: "/" },
              { label: "Energy", href: "/" },
              { label: "Charging", href: "/" },
              { label: "Discover", href: "/" },
              { label: "Shop", href: "/" },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="py-2 px-3 text-sm font-semibold rounded hover:bg-white hover:text-black"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </div>

        <div className="max-md:hidden pl-4">
          <ol className="flex justify-end items-center space-x-3">
            {[
              { icon: <SupportIcon />, href: "/" },
              { icon: <EarthIcon />, href: "/" },
              { icon: <AccountIcon />, href: "/" },
            ].map((item, index) => (
              <li key={index}>
                <Link href={item.href} aria-label="navbar-icon">{item.icon}</Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </nav>
  );
}
