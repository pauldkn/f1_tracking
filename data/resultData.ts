import { RaceResult, RawRaceResult } from '@/types/result'
import { getResultsWithTeam } from '@/utils'

const raceResults: RawRaceResult[] = [
  {
    track: { name: 'Bahrain', order: 1 },
    fastestLap: 'Hugo',
    results: [
      { position: 1, pilote: 'Hugo', points: 26 },
      { position: 2, pilote: 'Toms_971', points: 18 },
      { position: 3, pilote: 'Renanito', points: 15 },
      { position: 4, pilote: 'Alexbenzema11', points: 12 },
      { position: 5, pilote: 'Dikson', points: 10 },
      { position: 6, pilote: 'PriceMGL', points: 8 },
      { position: 7, pilote: 'Floo29', points: 6 },
      { position: 8, pilote: 'Ocon', points: 4 },
      { position: 9, pilote: 'Edy', points: 2 },
      { position: 10, pilote: 'Bottas', points: 1 },
    ],
  },
  {
    track: { name: 'Jeddah', order: 2 },
    fastestLap: 'Hugo',
    results: [
      { position: 1, pilote: 'Dikson', points: 25 },
      { position: 2, pilote: 'Renanito', points: 18 },
      { position: 3, pilote: 'Hugo', points: 16 },
      { position: 4, pilote: 'Piastri', points: 12 },
      { position: 5, pilote: 'Toms_971', points: 10 },
      { position: 6, pilote: 'Alex123fr', points: 8 },
      { position: 7, pilote: 'Sargeant', points: 6 },
      { position: 8, pilote: 'Alexbenzema11', points: 4 },
      { position: 9, pilote: 'Veronicoje9', points: 2 },
      { position: 10, pilote: 'Bottas', points: 1 },
    ],
  },
  {
    track: { name: 'Melbourne', order: 3 },
    fastestLap: 'Hugo',
    results: [
      { position: 1, pilote: 'Dikson', points: 25 },
      { position: 2, pilote: 'Hugo', points: 19 },
      { position: 3, pilote: 'Renanito', points: 15 },
      { position: 4, pilote: 'Zhou', points: 12 },
      { position: 5, pilote: 'Bottas', points: 10 },
      { position: 6, pilote: 'Alexbenzema11', points: 8 },
      { position: 7, pilote: 'MBphenix', points: 6 },
      { position: 8, pilote: 'Albon', points: 4 },
      { position: 9, pilote: 'PriceMGL', points: 2 },
      { position: 10, pilote: 'Ocon', points: 1 },
    ],
  },
  {
    track: { name: 'Baku', order: 4 },
    fastestLap: 'Dikson',
    results: [
      { position: 1, pilote: 'Dikson', points: 26 },
      { position: 2, pilote: 'Hugo', points: 18 },
      { position: 3, pilote: 'Zhou', points: 15 },
      { position: 4, pilote: 'Sargeant', points: 12 },
      { position: 5, pilote: 'Tsunoda', points: 10 },
      { position: 6, pilote: 'Ricciardo', points: 8 },
      { position: 7, pilote: 'Renanito', points: 6 },
      { position: 8, pilote: 'Gasly', points: 4 },
      { position: 9, pilote: 'Stroll', points: 2 },
      { position: 10, pilote: 'Magnussen', points: 1 },
    ],
  },
  {
    track: { name: 'Miami', order: 5 },
    fastestLap: 'Dikson',
    results: [
      { position: 1, pilote: 'Dikson', points: 26 },
      { position: 2, pilote: 'Toms_971', points: 18 },
      { position: 3, pilote: 'Hugo', points: 15 },
      { position: 4, pilote: 'Renanito', points: 12 },
      { position: 5, pilote: 'Bottas', points: 10 },
      { position: 6, pilote: 'Albon', points: 8 },
      { position: 7, pilote: 'TheDarkKnight', points: 6 },
      { position: 8, pilote: 'Gasly', points: 4 },
      { position: 9, pilote: 'Sargeant', points: 2 },
      { position: 10, pilote: 'Ocon', points: 1 },
    ],
  },
  {
    track: { name: 'Monaco', order: 6 },
    fastestLap: 'Dikson',
    results: [
      { position: 1, pilote: 'Dikson', points: 26 },
      { position: 2, pilote: 'Hugo', points: 18 },
      { position: 3, pilote: 'Tsunoda', points: 15 },
      { position: 4, pilote: 'Stroll', points: 12 },
      { position: 5, pilote: 'Bottas', points: 10 },
      { position: 6, pilote: 'Albon', points: 8 },
      { position: 7, pilote: 'Zhou', points: 6 },
      { position: 8, pilote: 'Magnussen', points: 4 },
      { position: 9, pilote: 'Alonso', points: 2 },
      { position: 10, pilote: 'Ricciardo', points: 1 },
    ],
  },
  {
    track: { name: 'Barcelona', order: 7 },
    fastestLap: 'MBphenix',
    results: [
      { position: 1, pilote: 'Dikson', points: 25 },
      { position: 2, pilote: 'Hugo', points: 18 },
      { position: 3, pilote: 'MBphenix', points: 16 },
      { position: 4, pilote: 'Tsunoda', points: 12 },
      { position: 5, pilote: 'Zhou', points: 10 },
      { position: 6, pilote: 'Alonso', points: 8 },
      { position: 7, pilote: 'Sargeant', points: 6 },
      { position: 8, pilote: 'Albon', points: 4 },
      { position: 9, pilote: 'Hulkenberg', points: 2 },
      { position: 10, pilote: 'Perez', points: 1 },
    ],
  },
  {
    track: { name: 'Canada', order: 8 },
    fastestLap: 'Renanito',
    results: [
      { position: 1, pilote: 'Dikson', points: 25 },
      { position: 2, pilote: 'MBphenix', points: 18 },
      { position: 3, pilote: 'Hugo', points: 15 },
      { position: 4, pilote: 'Renanito', points: 13 },
      { position: 5, pilote: 'Edy', points: 10 },
      { position: 6, pilote: 'Alonso', points: 8 },
      { position: 7, pilote: 'Sargeant', points: 6 },
      { position: 8, pilote: 'Tsunoda', points: 4 },
      { position: 9, pilote: 'Hulkenberg', points: 2 },
      { position: 10, pilote: 'TheDarkKnight', points: 1 },
    ],
  },
  {
    track: { name: 'Austria', order: 9 },
    fastestLap: 'Hugo',
    results: [
      { position: 1, pilote: 'MBphenix', points: 25 },
      { position: 2, pilote: 'Hugo', points: 19 },
      { position: 3, pilote: 'Dikson', points: 15 },
      { position: 4, pilote: 'Edy', points: 12 },
      { position: 5, pilote: 'TheDarkKnight', points: 10 },
      { position: 6, pilote: 'Albon', points: 8 },
      { position: 7, pilote: 'Leclerc', points: 6 },
      { position: 8, pilote: 'Alex123fr', points: 4 },
      { position: 9, pilote: 'Zhou', points: 2 },
      { position: 10, pilote: 'Bottas', points: 1 },
    ],
  },
  {
    track: { name: 'Silverstone', order: 10 },
    fastestLap: 'Dikson',
    results: [
      { position: 1, pilote: 'Dikson', points: 26 },
      { position: 2, pilote: 'Edy', points: 18 },
      { position: 3, pilote: 'TheDarkKnight', points: 15 },
      { position: 4, pilote: 'Russel', points: 12 },
      { position: 5, pilote: 'Leclerc', points: 10 },
      { position: 6, pilote: 'Zhou', points: 8 },
      { position: 7, pilote: 'Alonso', points: 6 },
      { position: 8, pilote: 'Verstappen', points: 4 },
      { position: 9, pilote: 'Sargeant', points: 2 },
      { position: 10, pilote: 'Piastri', points: 1 },
    ],
  },
  {
    track: { name: 'Hungaroring', order: 11 },
    fastestLap: 'Hugo',
    results: [
      { position: 1, pilote: 'Dikson', points: 25 },
      { position: 2, pilote: 'Hugo', points: 19 },
      { position: 3, pilote: 'Toms_971', points: 15 },
      { position: 4, pilote: 'Edy', points: 12 },
      { position: 5, pilote: 'PriceMGL', points: 10 },
      { position: 6, pilote: 'Russel', points: 8 },
      { position: 7, pilote: 'Tsunoda', points: 6 },
      { position: 8, pilote: 'Sargeant', points: 4 },
      { position: 9, pilote: 'Zhou', points: 2 },
      { position: 10, pilote: 'Piastri', points: 1 },
    ],
  },
  {
    track: { name: 'SPA', order: 12 },
    fastestLap: 'Hugo',
    results: [
      { position: 1, pilote: 'Dikson', points: 25 },
      { position: 2, pilote: 'Hugo', points: 19 },
      { position: 3, pilote: 'Toms_971', points: 15 },
      { position: 4, pilote: 'Edy', points: 12 },
      { position: 5, pilote: 'Zhou', points: 10 },
      { position: 6, pilote: 'Tsunoda', points: 8 },
      { position: 7, pilote: 'Ricciardo', points: 6 },
      { position: 8, pilote: 'Julien', points: 4 },
      { position: 9, pilote: 'TheDarkKnight', points: 2 },
      { position: 10, pilote: 'Sainz', points: 1 },
    ],
  },
  {
    track: { name: 'Zandvoort', order: 13 },
    fastestLap: 'Hugo',
    results: [
      { position: 1, pilote: 'Dikson', points: 25 },
      { position: 2, pilote: 'Hugo', points: 19 },
      { position: 3, pilote: 'Toms_971', points: 15 },
      { position: 4, pilote: 'Edy', points: 12 },
      { position: 5, pilote: 'Albon', points: 10 },
      { position: 6, pilote: 'Russel', points: 8 },
      { position: 7, pilote: 'Tsunoda', points: 6 },
      { position: 8, pilote: 'Sargeant', points: 4 },
      { position: 9, pilote: 'Alex123fr', points: 2 },
      { position: 10, pilote: 'Bottas', points: 1 },
    ],
  },
  {
    track: { name: 'Monza', order: 14 },
    fastestLap: 'Dikson',
    results: [
      { position: 1, pilote: 'Dikson', points: 26 },
      { position: 2, pilote: 'Toms_971', points: 18 },
      { position: 3, pilote: 'Edy', points: 15 },
      { position: 4, pilote: 'Hugo', points: 12 },
      { position: 5, pilote: 'TheDarkKnight', points: 10 },
      { position: 6, pilote: 'Alex123fr', points: 8 },
      { position: 7, pilote: 'Piastri', points: 6 },
      { position: 8, pilote: 'Ocon', points: 4 },
      { position: 9, pilote: 'Tsunoda', points: 2 },
      { position: 10, pilote: 'Albon', points: 1 },
    ],
  },
  {
    track: { name: 'Singapore', order: 15 },
    fastestLap: 'Dikson',
    results: [
      { position: 1, pilote: 'Dikson', points: 26 },
      { position: 2, pilote: 'Hugo', points: 18 },
      { position: 3, pilote: 'Edy', points: 15 },
      { position: 4, pilote: 'Alonso', points: 12 },
      { position: 5, pilote: 'Tsunoda', points: 10 },
      { position: 6, pilote: 'MBphenix', points: 8 },
      { position: 7, pilote: 'Sainz', points: 6 },
      { position: 8, pilote: 'Zhou', points: 4 },
      { position: 9, pilote: 'Hulkenberg', points: 2 },
      { position: 10, pilote: 'Ricciardo', points: 1 },
    ],
  },
  {
    track: { name: 'Suzuka', order: 16 },
    fastestLap: 'Dikson',
    results: [
      { position: 1, pilote: 'Dikson', points: 26 },
      { position: 2, pilote: 'Hugo', points: 18 },
      { position: 3, pilote: 'Edy', points: 15 },
      { position: 4, pilote: 'Toms_971', points: 12 },
      { position: 5, pilote: 'Albon', points: 10 },
      { position: 6, pilote: 'Zhou', points: 8 },
      { position: 7, pilote: 'Hulkenberg', points: 6 },
      { position: 8, pilote: 'Russel', points: 4 },
      { position: 9, pilote: 'Ricciardo', points: 2 },
      { position: 10, pilote: 'Ocon', points: 1 },
    ],
  },
  {
    track: { name: 'Qatar', order: 17 },
    fastestLap: 'Hugo',
    results: [
      { position: 1, pilote: 'Edy', points: 25 },
      { position: 2, pilote: 'Hugo', points: 19 },
      { position: 3, pilote: 'MBphenix', points: 15 },
      { position: 4, pilote: 'Toms_971', points: 12 },
      { position: 5, pilote: 'TheDarkKnight', points: 10 },
      { position: 6, pilote: 'Tsunoda', points: 8 },
      { position: 7, pilote: 'Russel', points: 6 },
      { position: 8, pilote: 'Sargeant', points: 4 },
      { position: 9, pilote: 'Bottas', points: 2 },
      { position: 10, pilote: 'Hulkenberg', points: 1 },
    ],
  },
  {
    track: { name: 'Austin', order: 18 },
    fastestLap: 'Dikson',
    results: [
      { position: 1, pilote: 'Hugo', points: 25 },
      { position: 2, pilote: 'Dikson', points: 19 },
      { position: 3, pilote: 'MBphenix', points: 15 },
      { position: 4, pilote: 'Edy', points: 12 },
      { position: 5, pilote: 'TheDarkKnight', points: 10 },
      { position: 6, pilote: 'Tsunoda', points: 8 },
      { position: 7, pilote: 'Alonso', points: 6 },
      { position: 8, pilote: 'Sargeant', points: 4 },
      { position: 9, pilote: 'Bottas', points: 2 },
      { position: 10, pilote: 'Hulkenberg', points: 1 },
    ],
  },
]

export const raceResultData: RaceResult[] = raceResults.map((raceResult) => ({
  ...raceResult,
  results: getResultsWithTeam(raceResult.results),
}))
