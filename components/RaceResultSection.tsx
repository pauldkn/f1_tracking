import { useState } from "react";
import { raceResults } from "@/data/resultData";
import { RaceResultTable } from "./RaceResultTable";
import { TrackName } from "@/types/track";

export const RaceResultSection = () => {
  const [track, setTrack] = useState<TrackName>("Zandvoort");
  const race = raceResults.find((r) => r.track.name === track);

  return (
    <section>
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
      {!race ? <p>Not found.</p> : <RaceResultTable results={race.results} />}
    </section>
  );
};
