"use client";
import { Headline } from "../ui/headline";
import { Button } from "../ui/button";
import { Cover } from "./cover";
import Motion from "./motion";
import { footerData } from "@/app/data/footerData";

type Item = {
  title?: string;
  classes?: string;
};

type Props = {
  title?: any;
  subtitle?: any;
  highlight?: any;
  footer?: string;
  disclaimer?: string;
  pictureSrc?: string;
  videoSrc?: string;
  items?: Item[];
};

export default function Section({
  title,
  subtitle,
  highlight,
  footer,
  disclaimer,
  pictureSrc,
  videoSrc,
  items = [],
}: Props) {
  return (
    <div className="static">
      <section className={`relative flex flex-col snap-center`}>
        <Cover pictureSrc={pictureSrc} videoSrc={videoSrc} />
        <Motion>
          <div>
            <Headline title={title} subtitle={subtitle} highlight={highlight} />
          </div>
          <div>
            <Button items={items} />
            <div className=" mb-4 mx-14 flex justify-center">
              <p className="w-[560px] text-xs font-medium">{disclaimer}</p>
            </div>
            <div className={`w-full p-6 flex justify-center ${footer}`}>
              <ul className={`flex text-xs font-medium space-x-4 max-md:hidden`}>
                {footerData.map((item) => (
                  <li key={item.title}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Motion>
      </section>
    </div>
  );
}
