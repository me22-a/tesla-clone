"use client";
import { Headline } from "../ui/headline";
import { Button } from "../ui/button";
import { Cover } from "./cover";
import Motion from "./motion";

type Item = {
  title?: string;
  classes?: string;
};

type Props = {
  title?: any;
  subtitle?: any;
  highlight?: any;
  disclaimer?: string;
  pictureSrc?: string;
  videoSrc?: string;
  items?: Array<Item>;
};

export default function Section(props: Props) {
  const {
    title,
    subtitle,
    highlight,
    disclaimer,
    pictureSrc,
    videoSrc,
    items = [],
  } = props;

  return (
    <div className="static">
      <section className={`relative flex flex-col snap-start`}>
        <Cover pictureSrc={pictureSrc!} videoSrc={videoSrc} />
        <div className="h-screen pt-14 flex flex-col justify-between text-center">
          <Motion>
            <Headline title={title} subtitle={subtitle} highlight={highlight} />
          </Motion>
          <Motion>
            <Button items={items} />
            <div className=" mb-4 mx-14 flex justify-center">
              <p className="w-[560px] text-xs font-medium">{disclaimer}</p>
            </div>
          </Motion>
        </div>
      </section>
    </div>
  );
}
