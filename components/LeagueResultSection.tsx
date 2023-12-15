import { useState } from 'react'
import { createColumnHelper } from '@tanstack/react-table'
import { PiloteResultWithTeam, TeamResult } from '@/types/result'
import { getPiloteLeagueResults, getTeamLeagueResults } from '@/utils'
import { Table } from './ui/Table'
import { Title } from './ui/Title'
import { Button } from './ui/Button'

export const LeagueResultSection = () => {
  const [view, setView] = useState<'pilote' | 'team'>('pilote')
  const teamColumnHelper = createColumnHelper<TeamResult>()
  const piloteColumnHelper = createColumnHelper<PiloteResultWithTeam>()

  const teamColumns = [
    teamColumnHelper.accessor('position', {
      header: () => <div className="text-start">Pos.</div>,
      cell: (props) => <span className="text-start font-light">{props.getValue()}</span>,
    }),
    teamColumnHelper.accessor('team', {
      header: () => <div className="text-start">Team</div>,
      cell: (props) => <span className="font-medium">{props.getValue()}</span>,
    }),
    teamColumnHelper.accessor('points', {
      header: () => <div className="text-end">Points</div>,
      cell: (props) => <span className="block text-end">{props.getValue()}</span>,
    }),
  ]
  const piloteColumns = [
    piloteColumnHelper.accessor('position', {
      header: () => <div className="text-start">Pos.</div>,
      cell: (props) => <span className="text-start font-light">{props.getValue()}</span>,
    }),
    piloteColumnHelper.accessor('pilote', {
      header: () => <div className="text-start">Player</div>,
      cell: (props) => <span className="text-start font-medium">{props.getValue()}</span>,
    }),
    piloteColumnHelper.accessor('team', {
      header: () => <div className="text-start">Team</div>,
      cell: (props) => <span className="font-light">{props.getValue()}</span>,
    }),
    piloteColumnHelper.accessor('points', {
      header: () => <div className="text-end">Points</div>,
      cell: (props) => <span className="block text-end">{props.getValue()}</span>,
    }),
  ]

  return (
    <section className="flex flex-col items-center gap-8">
      <Title text="Classement de la ligue" />
      <div id="leagueResultControllers" className="flex items-center justify-center gap-4">
        <Button text="Pilotes" isActive={view === 'pilote'} onClick={() => setView('pilote')} />
        <Button text="Éuries" isActive={view === 'team'} onClick={() => setView('team')} />
      </div>
      <div className="flex flex-col items-center gap-5">
        {view === 'pilote' ? (
          <Table columns={piloteColumns} data={getPiloteLeagueResults()} />
        ) : (
          <Table columns={teamColumns} data={getTeamLeagueResults()} />
        )}
      </div>
    </section>
  )
}
