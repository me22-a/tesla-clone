import Image from "next/image";
import Link from "next/link";

type Props = {
  imageSrc: string;
  title: string;
};

export const Card = ({ imageSrc, title }: Props) => (
  <div className="w-max flex flex-col justify-center text-center text-black">
    <Link href="#">
      <Image src={imageSrc} width="220" height="123" alt="" />
    </Link>
    <h4 className="pb-2 font-semibold text-lg">{title}</h4>
    <div className="space-x-4 underline underline-offset-4 text-sm">
      <Link href="#">Learn</Link>
      <Link href="#">Order</Link>
    </div>
  </div>
);
