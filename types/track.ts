export type TrackName =
  | "Bahrain"
  | "Jeddah"
  | "Melbourne"
  | "Baku"
  | "Miami"
  | "Imola"
  | "Monaco"
  | "Barcelona"
  | "Canada"
  | "Austria"
  | "Silverstone"
  | "Hungaroring"
  | "SPA"
  | "Zandvoort"
  | "Monza"
  | "Singapore"
  | "Suzuka"
  | "Qatar"
  | "Austin"
  | "Mexico"
  | "Brazil"
  | "Las Vegas"
  | "Abu Dhabi";

export interface Track {
  order: number;
  name: TrackName;
  country?: string;
}
