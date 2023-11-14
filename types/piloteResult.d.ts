import { Pilote } from "./pilote";

export interface PiloteResult {
  pilote: Pilote;
  position: number;
  points: number;
  fastestLap: boolean;
}
