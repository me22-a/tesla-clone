import Image from "next/image";
import Link from "next/link";

const vehicleData = [
  {
    imageSrc: "/images/header/Mega-Menu-Vehicles-Model-S.avif",
    title: "Model S",
  },
  {
    imageSrc: "/images/header/Mega-Menu-Vehicles-Model-3-LHD.avif",
    title: "Model 3",
  },
  {
    imageSrc: "/images/header/Mega-Menu-Vehicles-Model-X.avif",
    title: "Model X",
  },
  {
    imageSrc: "/images/header/Mega-Menu-Vehicles-Model-Y.avif",
    title: "Model Y",
  },
  {
    imageSrc: "/images/header/Mega-Menu-Vehicles-Cybertruck-1x.avif",
    title: "Cybertruck",
  },
  {
    imageSrc: "/images/header/Mega-Menu-Vehicles-HMC-RedBlue-LHD.avif",
    title: "Help Me Choose",
  },
];

const footerLinks = [
  { text: "Inventory", href: "/" },
  { text: "Used Cars", href: "/" },
  { text: "Demo Drive", href: "/" },
  { text: "Trade-in", href: "/" },
  { text: "Compare", href: "/" },
  { text: "Help Me Charge", href: "/" },
  { text: "Fleet", href: "/" },
  { text: "Semi", href: "/" },
  { text: "Roadster", href: "/" },
];

export default function Vehicle() {
  return (
    <div className=" w-full h-full flex justify-center divide-x bg-white z-0 p-20">
      <div className="gap-5 px-14  grid grid-cols-4 grid-rows-2">
        {vehicleData.map((vehicle, index) => (
          <div
            key={index}
            className="w-max flex flex-col justify-center text-center text-black"
          >
            <Link href="#">
              <Image
                src={vehicle.imageSrc}
                width="220"
                height="123"
                alt={vehicle.title}
              />
            </Link>
            <h4 className="pb-2 font-semibold text-lg">{vehicle.title}</h4>
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
