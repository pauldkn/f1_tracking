import { useState } from "react";
import { Work_Sans as CustomFont } from "next/font/google";
import { RaceResultTable } from "@/components/RaceResultTable";
import { raceResults } from "@/data/resultData";
import { TrackName } from "@/types/track";
const font = CustomFont({ subsets: ["latin"], display: "swap", weight: "variable" });

export default function Home() {
  const [track, setTrack] = useState<TrackName>("Silverstone");
  const race = raceResults.find((r) => r.track.name === track);

  return (
    <div className={font.className}>
      <div id="trackList" className="flex flex-wrap items-center justify-center gap-2 p-10">
        {raceResults.map((race, i) => (
          <div
            key={i}
            className={`w-40 min-w-fit p-2 grid place-items-center hover:cursor-pointer ${
              race.track.name === track ? "bg-slate-700" : "bg-slate-900 hover:bg-slate-800"
            }`}
            onClick={() => setTrack(race.track.name)}
          >
            <span>{race.track.name}</span>
          </div>
        ))}
      </div>
      {race ? <RaceResultTable results={race.results} /> : <p>Not found.</p>}
    </div>
  );
}
