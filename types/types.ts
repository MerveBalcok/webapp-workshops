// types.ts

export interface Verein {
  id: number;
  name: string;
  avatarUrl?: string;
  instagramProfileUrl?: string;
}

export interface Workshop {
  id: number;
  title: string;
  date: string; // Falls Datum als String von der API zurückkommt
  location: string;
  cost: number;
  imageUrl?: string;
  instagramPostUrl?: string;
  Verein?: Verein; // Der Verein ist optional
}

export type LinkTarget = {
  text: string;
  url: string;
};
