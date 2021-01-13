export interface TrekResults {
  resultsNumber: number;
  results: TrekResult[];
}

export interface TrekResult {
  activityIcon: string; // TODO (call API supplémentaire surement)
  place: string;
  title: string;
  tags: number[]; // Should be string[] (call API supplémentaire)
  informations: {
    duration: number | null; // Should be string (toujours heures)
    distance: number; // Should be string (toujours mètres)
    elevation: number; // Should be string (toujours mètres)
    difficulty: string | null;
  };
}

// API response

export interface RawTrekResults {
  count: number;
  next: string | null;
  previous: string | null;
  results: RawTrekResult[];
}

export interface RawTrekResult {
  ascent: number;
  departure: string;
  difficulty: number | null;
  duration: number | null;
  labels: number[];
  length_2d: number;
  name: string;
}
