import { Pilote } from '@/types/pilote'

export const playersData: Pilote[] = [
  { name: 'Dikson', team: 'McLaren', isAI: false },
  { name: 'MBphenix', team: 'McLaren', isAI: false },
  { name: 'Hugo', team: 'RedBull', isAI: false },
  { name: 'Edy', team: 'RedBull', isAI: false },
  { name: 'Toms_971', team: 'Ferrari', isAI: false },
  { name: 'PriceMGL', team: 'Ferrari', isAI: false },
  { name: 'Renanito', team: 'Mercedes', isAI: false },
  { name: 'TheDarkKnight', team: 'Mercedes', isAI: false },
  { name: 'Alex123fr', team: 'AstonMartin', isAI: false },
  { name: 'Alexbenzema11', team: 'Williams', isAI: false },
  { name: 'Floo29', team: 'AlphaTauri', isAI: false },
  { name: 'Quentin_B', team: 'AlphaTauri', isAI: false },
  { name: 'Veronicoje9', team: 'Haas', isAI: false },
  { name: 'Davido9', team: 'Haas', isAI: false },
  { name: 'Synesky', team: 'Alpine', isAI: false },
  { name: 'Julien', team: 'Alpine', isAI: false },
]

export const botsData: Pilote[] = [
  { name: 'Norris', team: 'McLaren', isAI: true },
  { name: 'Piastri', team: 'McLaren', isAI: true },
  { name: 'Verstappen', team: 'RedBull', isAI: true },
  { name: 'Perez', team: 'RedBull', isAI: true },
  { name: 'Leclerc', team: 'Ferrari', isAI: true },
  { name: 'Sainz', team: 'Ferrari', isAI: true },
  { name: 'Hamilton', team: 'Mercedes', isAI: true },
  { name: 'Russel', team: 'Mercedes', isAI: true },
  { name: 'Gasly', team: 'Alpine', isAI: true },
  { name: 'Ocon', team: 'Alpine', isAI: true },
  { name: 'Alonso', team: 'AstonMartin', isAI: true },
  { name: 'Stroll', team: 'AstonMartin', isAI: true },
  { name: 'Albon', team: 'Williams', isAI: true },
  { name: 'Sargeant', team: 'Williams', isAI: true },
  { name: 'Tsunoda', team: 'AlphaTauri', isAI: true },
  { name: 'Ricciardo', team: 'AlphaTauri', isAI: true },
  { name: 'Magnussen', team: 'Haas', isAI: true },
  { name: 'Hulkenberg', team: 'Haas', isAI: true },
  { name: 'Bottas', team: 'AlfaRomeo', isAI: true },
  { name: 'Zhou', team: 'AlfaRomeo', isAI: true },
]

export const piloteData: Pilote[] = [...playersData, ...botsData]
