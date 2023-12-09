import Link from "next/link";

type Item = {
  title?: string;
  classes?: string;
};

type Props = {
  items: Array<Item>;
};

export const Button = (props: Props) => {
  const { items = [] } = props;

  return (
    <div className="flex justify-center gap-6 p-8 max-md:flex-wrap">
      {items.map(({ title, classes }) => (
        <button
          key={`${title}`}
          className={`w-[264px] py-2.5 text-sm font-semibold rounded ${classes}`}
        >
          <Link href="#">
            <p>{title}</p>
          </Link>
        </button>
      ))}
    </div>
  );
};
