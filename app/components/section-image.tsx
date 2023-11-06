import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  bgImage: string;
  ImageClass?: string;
  disclaimer?: string;
};

export default function SectionImg({
  title,
  subtitle,
  bgImage,
  ImageClass,
  disclaimer,
}: Props) {
  return (
    <div className="static">
      <section className="relative flex flex-col snap-start">
        <Image
          src={bgImage}
          alt="background image"
          fill={true}
          quality={100}
          loading="lazy"
          className={`-z-10 object-cover ${ImageClass}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw"
        />
        <div className="h-[100vh] pt-14 flex flex-col justify-between text-center">
          <div>
            <article className="mt-8 text-white">
              <h1 className="text-4xl font-semibold">{title}</h1>
              <p className="text-xl">{subtitle}</p>

            </article>
          </div>
          <div className=" ">
            <div className="flex justify-center gap-6 p-8">
              <Link
                href=""
                className="w-[264px] py-2.5 bg-[#171A20CC] text-sm font-semibold rounded"
              >
                <span>Order Now</span>
              </Link>
              <Link
                href=""
                className="w-[264px] py-2.5 bg-[#F4F4F4A6] text-sm font-semibold text-black rounded"
              >
                <span>Demo Drive</span>
              </Link>
            </div>
            <div className=" mb-4 mx-14 flex justify-center">
              <p className="w-[560px] text-xs font-medium">
                {disclaimer}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
