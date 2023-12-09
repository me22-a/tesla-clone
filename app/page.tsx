import Section from "./components/widgets/section";
import { sectionData } from "./data/sectionData";

export default function Home() {
  return (
    <div>
      <>
        {sectionData.map((section, index) => (
          <div key={index}>
            <Section {...section} />
          </div>
        ))}
      </>
    </div>
  );
}
