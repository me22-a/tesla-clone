import Image from "next/image";

type Props = {
  pictureSrc?: string | null;
  videoSrc?: string | null;
};

export const Cover = ({ pictureSrc, videoSrc }: Props) => {
  return (
    <>
      {pictureSrc && (
        <Image
          src={pictureSrc!}
          alt="background image"
          fill={true}
          quality={75}
          loading="lazy"
          priority={false}
          className={`-z-10 object-cover object-center h-full w-full absolute`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw"
        />
      )}
      {videoSrc && (
        <video
          preload="auto"
          autoPlay
          loop
          muted
          className={`-z-10 object-cover object-center h-full w-full absolute `}
          poster="/images/background/Homepage-Model-3-Desktop-NA.avif"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </>
  );
};
