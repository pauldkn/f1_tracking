import { PiloteName } from "./pilote";
import { Track } from "./track";

export interface PiloteResult {
  pilote: PiloteName;
  position: number;
  points: number;
}

export interface RaceResult {
  track: Track;
  fastestLap: PiloteName | null;
  results: PiloteResult[];
}
