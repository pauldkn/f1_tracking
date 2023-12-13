import { createColumnHelper } from '@tanstack/react-table'
import { PiloteResultWithTeam, TeamResult } from '@/types/result'
import { getPiloteLeagueResults, getTeamLeagueResults } from '@/utils'
import { Table } from './ui/Table'
import { Title } from './ui/Title'

export const LeagueResultSection = () => {
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
    <section className="flex flex-wrap justify-center gap-10">
      <div className="flex flex-col items-center gap-5">
        <Title text="Classement Pilotes" />
        <Table columns={piloteColumns} data={getPiloteLeagueResults()} />
      </div>
      <div className="flex flex-col items-center gap-5">
        <Title text="Classement Écuries" />
        <Table columns={teamColumns} data={getTeamLeagueResults()} />
      </div>
    </section>
  )
}
