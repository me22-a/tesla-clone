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
  footer?: string;
  disclaimer?: string;
  pictureSrc?: string;
  videoSrc?: string;
  items?: Array<Item>;
};

const Items = [
  {
    text: "Tesla © 2023",
    link: "https://www.tesla.com/",
  },
  {
    text: "Privacy & Legal",
    link: "https://www.tesla.com/privacy",
  },
  {
    text: "Vehicle Recalls",
    link: "https://www.tesla.com/recalls",
  },
  {
    text: "Contact",
    link: "https://www.tesla.com/contact",
  },
  {
    text: "News",
    link: "https://www.tesla.com/news",
  },
  {
    text: "Get Updates",
    link: "https://www.tesla.com/get-updates",
  },
  {
    text: "Locations",
    link: "https://www.tesla.com/locations",
  },
];

export default function Section(props: Props) {
  const {
    title,
    subtitle,
    highlight,
    footer,
    disclaimer,
    pictureSrc,
    videoSrc,
    items = [],
  } = props;

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
              <ul className={`flex text-xs font-medium space-x-4 `}>
                {Items.map((item) => (
                  <li key={item.text}>
                    <a href={item.link}>{item.text}</a>
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
