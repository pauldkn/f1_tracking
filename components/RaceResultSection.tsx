import { useState } from 'react'
import { TrackName } from '@/types/track'
import { raceResultData } from '@/data/resultData'
import { RaceResultTable } from './RaceResultTable'
import { Title } from './ui/Title'

export const RaceResultSection = () => {
  const [track, setTrack] = useState<TrackName>('Zandvoort')
  const race = raceResultData.find((r) => r.track.name === track)

  return (
    <section className="flex flex-wrap justify-center">
      <Title text="Résultats des GP" />
      <div id="trackList" className="flex flex-wrap items-center justify-center gap-2 p-10">
        {raceResultData.map((race, i) => (
          <div
            key={i}
            className={`grid w-20 min-w-fit place-items-center p-2 hover:cursor-pointer md:w-40 ${
              race.track.name === track ? 'bg-slate-700' : 'bg-slate-900 hover:bg-slate-800'
            }`}
            onClick={() => setTrack(race.track.name)}
          >
            <span>{race.track.name}</span>
          </div>
        ))}
      </div>
      {!race?.results ? <p>Not found.</p> : <RaceResultTable results={race.results} />}
    </section>
  )
}
