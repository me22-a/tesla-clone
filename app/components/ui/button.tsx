import Link from "next/link";

interface Item {
  title?: string;
  classes?: string;
}

interface Props {
  items: Array<Item>;
}

export const Button = (props: Props) => {
  const { items = [] } = props;

  return (
    <div className="flex justify-center gap-6 p-8 max-md:flex-wrap">
      {items.map(({ title, classes }) => (
        <div
          key={`${title}`}
          className={`w-[264px] py-2.5 text-sm font-semibold rounded ${classes}`}
        >
          <Link href="#">
            <span>{title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};
