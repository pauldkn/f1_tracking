import { useEffect } from 'react'
import { getPiloteLeagueResults, getTeamLeagueResults } from '@/utils'
import { LeagueResultPiloteTable } from './LeagueResultPiloteTable'
import { LeagueResultTeamTable } from './LeagueResultTeamTable'

export const LeagueResultSection = () => {
  const leagueResults = getPiloteLeagueResults()
  const teamResults = getTeamLeagueResults()

  useEffect(() => {
    console.log('🚀 ~ LeagueResultSection ~ leagueResults:', leagueResults)
    console.log('🚀 ~ LeagueResultSection ~ teamResults:', teamResults)
  }, [])

  return (
    <section className="flex flex-wrap justify-center gap-10 border border-yellow-200">
      <div>
        <h1 className="text-center text-2xl font-semibold">Résultats Pilotes</h1>
        <LeagueResultPiloteTable />
      </div>
      <div>
        <h1 className="text-center text-2xl font-semibold">Résultats Écuries</h1>
        <LeagueResultTeamTable />
      </div>
    </section>
  )
}
