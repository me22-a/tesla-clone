import Image from "next/image";
import Link from "next/link";

const footerLinks: FooterLinksItem[] = [
  {
    header: "Resources",
    subcategories: [
      { title: "Demo Drive", href: "/demo-drive" },
      { title: "Insurance", href: "/insurance" },
      { title: "Video Guides", href: "/video-guides" },
      { title: "Customer Stories", href: "/customer-stories" },
      { title: "Events", href: "/events" },
    ],
  },
  {
    header: "Location Services",
    subcategories: [
      { title: "Find Us", href: "/find-us" },
      { title: "Trip Planner", href: "/trip-planner" },
      { title: "Find a Collision Center", href: "/find-collision-center" },
      {
        title: "Find a Certified Installer",
        href: "/find-certified-installer",
      },
    ],
  },
  {
    header: "Company",
    subcategories: [
      { title: "About", href: "/about" },
      { title: "Careers", href: "/careers" },
      { title: "Investor Relations", href: "/investor-relations" },
    ],
  },
];

type Subcategory = {
  title: string;
  href: string;
};

type FooterLinksItem = {
  header: string;
  subcategories: Subcategory[];
};

type Props = {
  header: string;
  subcategories: Subcategory[];
};

const FooterLinksColumn = ({ header, subcategories }: Props) => (
  <div className="mx-14">
    <h4 className="mb-4 text-zinc-400">{header}</h4>
    <ul>
      {subcategories?.map((subCategory, subIndex) => (
        <li key={subIndex} className="leading-loose font-semibold text-black">
          <Link
            href={subCategory.href}
            className="hover:underline hover:underline-offset-4"
          >
            {subCategory.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default function Discover() {
  return (
    <div className=" w-full h-full bg-white z-0 p-20">
      <div className=" flex justify-center my-8 text-start text-black">
        <div className="grid grid-cols-3 grid-rows-1">
          {footerLinks.map((item, index) => (
            <FooterLinksColumn key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
