import { PiloteName } from './pilote'
import { TeamName } from './team'
import { Track } from './track'

export interface PiloteScore {
  pilote: PiloteName
  points: number
}
export interface TeamScore {
  team: TeamName
  points: number
}

export interface PiloteResult extends PiloteScore {
  position: number
}
export interface TeamResult extends TeamScore {
  position: number
}
export interface PiloteResultWithTeam extends PiloteResult {
  team: TeamName | 'NC'
}

export interface RawRaceResult {
  track: Track
  fastestLap: PiloteName | null
  results: PiloteResult[]
}
export interface RaceResult {
  track: Track
  fastestLap: PiloteName | null
  results: PiloteResultWithTeam[]
}
