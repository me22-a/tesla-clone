import Image from "next/image";
import Link from "next/link";
export default function Vehicle() {
  return (
    <div className=" w-full h-full flex justify-evenly divide-x bg-white z-0 p-20">
      <div className="gap-5  grid grid-cols-4 grid-rows-2">
        <div className="w-max flex flex-col  justify-center text-center text-black">
          <Link href="#">
            <Image
              src="/images/header/Mega-Menu-Vehicles-Model-S.avif"
              width="220"
              height="123"
              alt=""
            />
          </Link>
          <h4 className="pb-2 font-semibold text-lg">Model S</h4>
          <div className=" space-x-4 underline underline-offset-4 text-sm">
            <Link href="#">Learn</Link>
            <Link href="#">Order</Link>
          </div>
        </div>
        <div className="w-max flex flex-col  justify-center text-center text-black">
          <Link href="#">
            <Image
              src="/images/header/Mega-Menu-Vehicles-Model-3-LHD.avif"
              width="220"
              height="123"
              alt=""
            />
          </Link>
          <h4 className="pb-2 font-semibold text-lg">Model 3</h4>
          <div className=" space-x-4 underline underline-offset-4 text-sm">
            <Link href="#">Learn</Link>
            <Link href="#">Order</Link>
          </div>
        </div>
        <div className="w-max flex flex-col  justify-center text-center text-black">
          <Link href="#">
            <Image
              src="/images/header/Mega-Menu-Vehicles-Model-X.avif"
              width="220"
              height="123"
              alt=""
            />
          </Link>
          <h4 className="pb-2 font-semibold text-lg">Model X</h4>
          <div className=" space-x-4 underline underline-offset-4 text-sm">
            <Link href="#">Learn</Link>
            <Link href="#">Order</Link>
          </div>
        </div>
        <div className="w-max flex flex-col  justify-center text-center text-black">
          <Link href="#">
            <Image
              src="/images/header/Mega-Menu-Vehicles-Model-Y.avif"
              width="220"
              height="123"
              alt=""
            />
          </Link>
          <h4 className="pb-2 font-semibold text-lg">Model Y</h4>
          <div className=" space-x-4 underline underline-offset-4 text-sm">
            <Link href="#">Learn</Link>
            <Link href="#">Order</Link>
          </div>
        </div>
        <div className="w-max flex flex-col  justify-center text-center text-black">
          <Link href="#">
            <Image
              src="/images/header/Mega-Menu-Vehicles-Cybertruck-1x.avif"
              width="220"
              height="123"
              alt=""
            />
          </Link>
          <h4 className="pb-2 font-semibold text-lg">Cybertruck</h4>
          <div className=" space-x-4 underline underline-offset-4 text-sm">
            <Link href="#">Learn</Link>
            <Link href="#">Order</Link>
          </div>
        </div>
        <div className="w-max flex flex-col  justify-center text-center text-black">
          <Link href="#">
            <Image
              src="/images/header/Mega-Menu-Vehicles-HMC-RedBlue-LHD.avif"
              width="220"
              height="123"
              alt=""
            />
          </Link>
          <h4 className="pb-2 font-semibold text-lg">Help Me Choose</h4>
          <div className=" space-x-4 underline underline-offset-4 text-sm">
            <Link href="#">Learn</Link>
            <Link href="#">Order</Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-20  font-semibold text-black">
        <Link href="#" className=" hover:underline hover:underline-offset-4">
          Inventory
        </Link>
        <Link href="#" className=" hover:underline hover:underline-offset-4">
          Used Cars
        </Link>
        <Link href="#" className=" hover:underline hover:underline-offset-4">
          Demo Drive
        </Link>
        <Link href="#" className=" hover:underline hover:underline-offset-4">
          Trade-in
        </Link>
        <Link href="#" className=" hover:underline hover:underline-offset-4">
          Compare
        </Link>
        <Link href="#" className=" hover:underline hover:underline-offset-4">
          Help Me Charge
        </Link>
        <Link href="#" className=" hover:underline hover:underline-offset-4">
          Fleet
        </Link>
        <Link href="#" className=" hover:underline hover:underline-offset-4">
          Semi
        </Link>
        <Link href="#" className=" hover:underline hover:underline-offset-4">
          Roadster
        </Link>
      </div>
    </div>
  );
}
