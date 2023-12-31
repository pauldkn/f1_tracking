import { useState } from 'react'
import { raceResultData } from '@/data/resultData'
import { Title } from './ui/Title'
import { PiloteResultWithTeam, RaceResult } from '@/types/result'
import { createColumnHelper } from '@tanstack/react-table'
import { Table } from './ui/Table'
import { Button } from './ui/Button'

export const RaceResultSection = () => {
  const [currentRace, setCurrentRace] = useState<RaceResult>(
    raceResultData[raceResultData.length - 1]
  )

  const columnHelper = createColumnHelper<PiloteResultWithTeam>()
  const columns = [
    columnHelper.accessor('position', {
      header: () => <div className="text-start">Pos.</div>,
      cell: (props) => <span className="text-start font-light">{props.getValue()}</span>,
    }),
    columnHelper.accessor('pilote', {
      header: () => <div className="text-start">Player</div>,
      cell: (props) => <span className="text-start font-medium">{props.getValue()}</span>,
    }),
    columnHelper.accessor('team', {
      header: () => <div className="text-start">Team</div>,
      cell: (props) => <span className="font-light">{props.getValue()}</span>,
    }),
    columnHelper.accessor('points', {
      header: () => <div className="text-end">Points</div>,
      cell: (props) => <span className="block text-end">{props.getValue()}</span>,
    }),
  ]

  return (
    <section className="flex flex-col items-center">
      <Title text="Résultats des GP" />
      <div id="trackList" className="flex flex-wrap items-center justify-center gap-1 p-8">
        {raceResultData.map((race, i) => (
          <Button
            key={i}
            isActive={race.track.name === currentRace.track.name}
            text={race.track.name}
            onClick={() => setCurrentRace(race)}
          />
        ))}
      </div>
      <Table columns={columns} data={currentRace.results} />
      <span className="mt-4 font-light italic">
        Meilleur tour en piste : {currentRace.fastestLap}
      </span>
    </section>
  )
}
