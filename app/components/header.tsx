import Link from "next/link";
import TeslaIcon from "./icons/TeslaIcon";
import SupportIcon from "./icons/SupportIcon";
import EarthIcon from "./icons/EarthIcon";
import AccountIcon from "./icons/AccountIcon";

export default function Header() {
  return (
    <nav className="w-full fixed top-0 z-50">
      <div className="px-[32px] py-4 grid grid-cols-2 md:grid-cols-3 text-white ">
        <div className="flex justify-start items-center px-4">
          <Link href="/">
            <TeslaIcon />
          </Link>
        </div>
        <div className="max-md:hidden px-4">
          <ol className="flex justify-center items-center space-x-3">
            <li className="">
              <Link
                className="py-2 px-3 text-sm font-semibold rounded hover:bg-white hover:text-black"
                href="/"
              >
                Vehicles
              </Link>
            </li>
            <li className="">
              <Link
                className="py-2 px-3 text-sm font-semibold rounded hover:bg-white hover:text-black"
                href="/"
              >
                Energy
              </Link>
            </li>
            <li className="">
              <Link
                className="py-2 px-3 text-sm font-semibold rounded hover:bg-white hover:text-black"
                href="/"
              >
                Charging
              </Link>
            </li>
            <li className="">
              <Link
                className="py-2 px-3 text-sm font-semibold rounded hover:bg-white hover:text-black"
                href="/"
              >
                Discover
              </Link>
            </li>
            <li className="">
              <Link
                className="py-2 px-3 text-sm font-semibold rounded hover:bg-white hover:text-black"
                href="/"
              >
                Shop
              </Link>
            </li>
          </ol>
        </div>
        <div className="max-md:hidden px-5">
          <ol className="flex justify-end items-center space-x-3">
            <li>
              <Link href="/">
                <SupportIcon />
              </Link>
            </li>
            <li>
              <Link href="/">
                <EarthIcon />
              </Link>
            </li>
            <li>
              <Link href="/">
                <AccountIcon />
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </nav>
  );
}
