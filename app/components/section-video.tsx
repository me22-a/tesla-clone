import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  bgVideo: string;
  VideoClass?: string;
};

export default function SectionVideo({
  title,
  subtitle,
  bgVideo,
  VideoClass,
}: Props) {
  return (
    <div className="static">
      <section className="h-[100vh] max-lg:static relative flex flex-col items-center snap-start">
        <video
          autoPlay
          loop
          muted
          className={`-z-10 object-cover object-center h-full w-full ${VideoClass}`}
        >
          <source src={bgVideo} type="" />
        </video>

        <div className="h-full absolute pt-14 flex flex-col justify-between text-center">
          <div>
            <article className="mt-8 text-white">
              <h1 className="text-4xl font-semibold">{title}</h1>
              <h4 className="text-xl">{subtitle}</h4>
            </article>
          </div>
          <div>
            <div className=" ">
              <div className="flex flex-warp flex-row max-lg:flex-col items-center gap-6 m-8">
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
            </div>
            <div className="m-4">
              <p className=" text-xs font-medium">
                *Excludes taxes and fees with price subject to change. Available
                in select states. See Details
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
