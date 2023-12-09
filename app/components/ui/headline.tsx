import { twMerge } from "tailwind-merge";

type Props = {
  title?: string;
  subtitle?: string;
  highlight?: string;
  classes?: Record<string, string>;
};

export const Headline = (props: Props) => {
  const { title, subtitle, highlight, classes = {} } = props;

  const {
    container: containerClass = "mt-12 text-white",
    title: titleClass = "text-[2.5rem] font-semibold",
    subtitle: subtitleClass = "text-xl",
    highlight: highlightClass = "text-xl",
  } = classes;

  return title || subtitle || highlight ? (
    <div className={twMerge("", containerClass)}>
      {title && (
        <h1
          className={twMerge("", titleClass)}
          dangerouslySetInnerHTML={{ __html: title as string }}
        />
      )}
      {subtitle && (
        <p
          className={twMerge("", subtitleClass)}
          dangerouslySetInnerHTML={{ __html: subtitle as string }}
        />
      )}
      {highlight && (
        <p
          className={twMerge("", highlightClass)}
          dangerouslySetInnerHTML={{ __html: highlight as string }}
        />
      )}
    </div>
  ) : null;
};
