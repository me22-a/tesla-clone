import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  {
    imageSrc: "/images/header/Mega-Menu-Shop-Charging.avif",
    title: "Charging",
  },
  {
    imageSrc: "/images/header/Mega-Menu-Shop-Vehicle-Accessories.avif",
    title: "Vehicle Accessories",
  },
  {
    imageSrc: "/images/header/Mega-Menu-Shop-Apparel.avif",
    title: "Apparel",
  },
  {
    imageSrc: "/images/header/Mega-Menu-Shop-Lifestyle.avif",
    title: "Lifestyle ",
  },
];

export default function Shop() {
  return (
    <div className=" w-full h-full flex justify-center divide-x bg-white z-0 p-20">
      <div className="gap-5 px-14  grid grid-cols-4 grid-rows-1">
        {footerLinks.map((vehicle, index) => (
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
            <Link href="#" className="pb-2 font-semibold text-lg">{vehicle.title}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
