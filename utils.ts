import { orderBy } from "lodash";
import { teamData } from "./data/teamData";
import { piloteData } from "./data/piloteData";
import { raceResultData } from "./data/resultData";
import { PiloteName } from "./types/pilote";
import { TeamName } from "./types/team";
import {
  PiloteResult,
  PiloteResultWithTeam,
  PiloteScore,
  RaceResult,
  TeamResult,
  TeamScore,
} from "./types/result";

const getPiloteTeam = (pilote: PiloteName): TeamName | "NC" => {
  return piloteData.find((p) => p.name === pilote)?.team || "NC";
};
export const getResultsWithTeam = (results: PiloteResult[]): PiloteResultWithTeam[] => {
  return results.map((res) => ({ ...res, team: getPiloteTeam(res.pilote) }));
};

const getSinglePiloteLeagueResult = (pilote: PiloteName): PiloteScore => {
  return raceResultData.reduce(
    (piloteScore: PiloteScore, race: RaceResult) => {
      const piloteRaceResult = race.results.find((result) => result.pilote === pilote);
      if (piloteRaceResult) piloteScore.points += piloteRaceResult.points;
      return piloteScore;
    },
    { pilote, points: 0 }
  );
};

const getSingleTeamLeagueResult = (team: TeamName): TeamScore => {
  const piloteLeagueResults = getPiloteLeagueResults();
  const teamLeagueResult: TeamScore = piloteLeagueResults.reduce(
    (teamScore: TeamScore, result: PiloteResultWithTeam) => {
      if (result.team === team) teamScore.points += result.points;
      return teamScore;
    },
    { team, points: 0 }
  );
  return teamLeagueResult;
};

export const getPiloteLeagueResults = (): PiloteResultWithTeam[] => {
  const scores = piloteData.map((pilote) => getSinglePiloteLeagueResult(pilote.name));
  const sorted = orderBy(scores, "points", "desc");
  const withPosition = sorted.map((score, i) => ({ ...score, position: i + 1 }));

  return getResultsWithTeam(withPosition);
};

export const getTeamLeagueResults = (): TeamResult[] => {
  const scores = teamData.map((team) => getSingleTeamLeagueResult(team));
  const sorted = orderBy(scores, "points", "desc");
  const withPosition = sorted.map((score, i) => ({ ...score, position: i + 1 }));

  return withPosition;
};
