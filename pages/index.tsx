import cn from "classnames";
import { Work_Sans as CustomFont } from "next/font/google";
import { RaceResultSection } from "@/components/RaceResultSection";

const font = CustomFont({ subsets: ["latin"], display: "swap", weight: "variable" });

export default function Home() {
  return (
    <div className={cn(font.className, "p-10")}>
      <RaceResultSection />
    </div>
  );
}
