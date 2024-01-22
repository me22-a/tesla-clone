import Link from "next/link";

type Props = {
  text: string;
  href: string;
};

export const LinkList = ({ text, href }: Props) => (
  <>
    <Link href={href} className="hover:underline hover:underline-offset-4">
      {text}
    </Link>
  </>
);
