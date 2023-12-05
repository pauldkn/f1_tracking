import { useState } from "react";
import { TrackName } from "@/types/track";
import { raceResultData } from "@/data/resultData";
import { RaceResultTable } from "./RaceResultTable";

export const RaceResultSection = () => {
  const [track, setTrack] = useState<TrackName>("Zandvoort");
  const race = raceResultData.find((r) => r.track.name === track);

  return (
    <section className="border border-yellow-200">
      <h1 className="text-2xl font-semibold">Résultats des courses</h1>
      <div id="trackList" className="flex flex-wrap items-center justify-center gap-2 p-10">
        {raceResultData.map((race, i) => (
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
      {!race?.results ? <p>Not found.</p> : <RaceResultTable results={race.results} />}
    </section>
  );
};
