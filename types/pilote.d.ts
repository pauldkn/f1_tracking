import { TeamName } from "./team";

export interface Pilote {
  name: PlayerName | BotName;
  team: TeamName;
  isAI?: boolean;
}

export type PlayerName =
  | "Dikson"
  | "MBphenix"
  | "Hugo"
  | "Edy"
  | "Toms_971"
  | "PriceMGL"
  | "Renanito"
  | "TheDarkKnight"
  | "Alex123fr";

export type BotName =
  | "Verstappen"
  | "Perez"
  | "Hamilton"
  | "Russel"
  | "Leclerc"
  | "Sainz"
  | "Gasly"
  | "Ocon"
  | "Norris"
  | "Piastri"
  | "Alonso"
  | "Stroll"
  | "Hulkenberg"
  | "Magnussen"
  | "Albon"
  | "Sargeant"
  | "Tsunoda"
  | "Ricciardo"
  | "Zhou"
  | "Bottas";
