import Image from "next/image";
import Link from "next/link";
export default function Energy() {
  return (
    <div className=" w-full h-full bg-white z-0 p-20">
      <div className="w-max flex flex-col justify-center text-center text-black">
        <Image
          src="/images/header/Mega-Menu-Vehicles-Model-Y.avif"
          width="220"
          height="123"
          alt=""
        />
        <h4 className="pb-2">Model Y</h4>
        <div className=" space-x-4 underline">
          <Link href="#">Learn</Link>
          <Link href="#">Order</Link>
        </div>
      </div>
    </div>
  );
}
