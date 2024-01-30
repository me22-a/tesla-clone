import Link from "next/link";
import Image from "next/image";

const energyData = [
  {
    imageSrc: "/images/header/Mega-Menu-Energy-Solar-Panels.avif",
    title: "Solar Panels",
  },
  {
    imageSrc: "/images/header/Mega-Menu-Energy-Solar-Roof.avif",
    title: "Solar Roof",
  },
  {
    imageSrc: "/images/header/Mega-Menu-Energy-Powerwall-Global.avif",
    title: "Powerwall",
  },
  {
    imageSrc: "/images/header/Mega-Menu-Energy-Megapack.avif",
    title: "Megapack",
  },
];

const footerLinks = [
  { text: "Schedule a Consultation", href: "/" },
  { text: "Why Solar", href: "/" },
  { text: "Incentives", href: "/" },
  { text: "Support", href: "/" },
  { text: "Partner with Tesla", href: "/" },
  { text: "Commercial", href: "/" },
  { text: "Utilities", href: "/" },
];

export default function Energy() {
  return (
    <div className=" w-full h-full flex justify-center divide-x bg-white z-0 p-20">
      <div className="gap-5 px-10 grid grid-cols-4 grid-rows-1">
        {energyData.map((energy, index) => (
          <div
            key={index}
            className="w-max flex flex-col justify-center text-center text-black"
          >
            <Link href="#">
              <Image
                src={energy.imageSrc}
                width="220"
                height="123"
                alt={energy.title}
              />
            </Link>
            <h4 className="pb-2 font-semibold text-lg">{energy.title}</h4>
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
