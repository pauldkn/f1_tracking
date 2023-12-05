import { TeamName } from './team'

export interface Pilote {
  name: PiloteName
  team: TeamName
  isAI?: boolean
}

export type PiloteName = PlayerName | BotName

type PlayerName =
  | 'Dikson'
  | 'MBphenix'
  | 'Hugo'
  | 'Edy'
  | 'Toms_971'
  | 'PriceMGL'
  | 'Renanito'
  | 'TheDarkKnight'
  | 'Alex123fr'
  | 'Alexbenzema11'
  | 'Floo2909'
  | 'Veronicoje91'
  | 'Davido91'
  | 'Quentin_Boateng'
  | 'Synesky'
  | 'unknown'

type BotName =
  | 'Verstappen'
  | 'Perez'
  | 'Hamilton'
  | 'Russel'
  | 'Leclerc'
  | 'Sainz'
  | 'Gasly'
  | 'Ocon'
  | 'Norris'
  | 'Piastri'
  | 'Alonso'
  | 'Stroll'
  | 'Hulkenberg'
  | 'Magnussen'
  | 'Albon'
  | 'Sargeant'
  | 'Tsunoda'
  | 'Ricciardo'
  | 'Zhou'
  | 'Bottas'
