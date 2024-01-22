import Image from "next/image";
import Link from "next/link";

const chargingData = [
  {
    imageSrc: "/images/header/Mega-Menu-Charging-Charging-Global.avif",
    title: "Charging",
  },
  {
    imageSrc: "/images/header/Mega-Menu-Charging-Home-Charging.avif",
    title: "Home Charging",
  },
  {
    imageSrc: "/images/header/Mega-Menu-Charging-Supercharging-APAC.avif",
    title: "SuperCharging",
  },
];

const footerLinks = [
  { text: "Help Me Charge", href: "/" },
  { text: "Charging Calculator", href: "/" },
  { text: "Trip Planner", href: "/" },
  { text: "Supercharger Voting", href: "/" },
  { text: "Host a Supercharger", href: "/" },
  { text: "Commercial Charging", href: "/" },
  { text: "Host Wall Connectors", href: "/" },
];

export default function Charging() {
  return (
    <div className=" w-full h-full flex justify-center divide-x bg-white z-0 p-20">
      <div className="px-10 flex">
        {chargingData.map((charging, index) => (
          <div
            key={index}
            className="w-max flex flex-col justify-center text-center text-black"
          >
            <Link href="#">
              <Image
                src={charging.imageSrc}
                width="220"
                height="123"
                alt={charging.title}
              />
            </Link>
            <h4 className="pb-2 font-semibold text-lg">{charging.title}</h4>
            <div className="space-x-4 underline underline-offset-4 text-sm">
              <Link href="#">Learn</Link>
              <Link href="#">Order</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3 px-20 font-semibold text-black">
        {footerLinks.map((link, index) => (
          <div key={index}>
            <Link
              href={link.href}
              className="hover:underline hover:underline-offset-4"
            >
              {link.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
