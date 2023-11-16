import { raceResults } from "@/data/resultData";
// import { useReactTable } from "@tanstack/react-table";

export const PiloteTable = () => {
  //   const table = useReactTable();

  return (
    <div>
      {raceResults.map((race, i) => (
        <div id="result" className="p-2 shadow-md w-60" key={i}>
          <div className="text-xl font-bold">{race.track.name}</div>
          <div className="italic">Meilleur tour : {race.fastestLap}</div>
          <div>
            {race.results.map((piloteResult, i) => (
              <div key={i} className="flex justify-between gap-2">
                <span>{piloteResult.pilote}</span>
                <div className="flex gap-2">
                  <span>{piloteResult.position}</span>
                  <span>{piloteResult.points}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
