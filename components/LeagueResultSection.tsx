import { useEffect } from 'react'
import { getPiloteLeagueResults, getTeamLeagueResults } from '@/utils'
import { LeagueResultPiloteTable } from './LeagueResultPiloteTable'
import { LeagueResultTeamTable } from './LeagueResultTeamTable'
import { Title } from './ui/Title'

export const LeagueResultSection = () => {
  const leagueResults = getPiloteLeagueResults()
  const teamResults = getTeamLeagueResults()

  useEffect(() => {
    console.log('🚀 ~ LeagueResultSection ~ leagueResults:', leagueResults)
    console.log('🚀 ~ LeagueResultSection ~ teamResults:', teamResults)
  }, [])

  return (
    <section className="flex flex-wrap justify-center gap-10">
      <div className="flex flex-col items-center gap-5">
        <Title text="Classement Pilotes" />
        <LeagueResultPiloteTable />
      </div>
      <div className="flex flex-col items-center gap-5">
        <Title text="Classement Écuries" />
        <LeagueResultTeamTable />
      </div>
    </section>
  )
}
