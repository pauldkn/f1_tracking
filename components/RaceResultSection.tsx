import { useState } from 'react'
import { raceResultData } from '@/data/resultData'
import { RaceResultTable } from './RaceResultTable'
import { Title } from './ui/Title'
import { RaceResult } from '@/types/result'
import cn from 'classnames'

export const RaceResultSection = () => {
  const [currentRace, setCurrentRace] = useState<RaceResult>(
    raceResultData[raceResultData.length - 1]
  )

  return (
    <section className="flex flex-wrap justify-center">
      <Title text="Résultats des GP" />
      <div id="trackList" className="flex flex-wrap items-center justify-center gap-2 p-10">
        {raceResultData.map((race, i) => (
          <button
            key={i}
            className={cn(
              'grid w-20 min-w-fit place-items-center bg-slate-900 p-2 hover:cursor-pointer hover:bg-slate-800 md:w-40',
              { 'bg-slate-700 hover:bg-slate-700': race.track.name === currentRace.track.name }
            )}
            onClick={() => setCurrentRace(race)}
          >
            <span>{race.track.name}</span>
          </button>
        ))}
      </div>
      <RaceResultTable results={currentRace.results} />
    </section>
  )
}
