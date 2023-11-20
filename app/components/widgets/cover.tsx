import Image from "next/image";

type Props = {
  pictureSrc?: string | null;
  videoSrc?: string | null;
};

export const Cover = (props: Props) => {
  const { pictureSrc, videoSrc } = props;

  return (
    <>
      <Image
        src={pictureSrc!}
        alt="background image"
        fill={true}
        quality={75}
        loading="lazy"
        className={`-z-10 object-cover object-center absolute`}
        sizes="(max-width: 768px) 95vw, (max-width: 1200px) 90vw"
      />
      <video
        autoPlay
        loop
        muted
        className={`-z-10 object-cover object-center h-full w-full absolute `}
      >
        <source src={videoSrc!} type="" />
      </video>
    </>
  );
};
