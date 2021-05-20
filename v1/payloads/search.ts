export interface Document {
  mdn_url: string;
  score: number;
  title: string;
  locale: string;
  slug: string;
  popularity: number;
  archived: boolean;
  summary: string;
  higlight: DocumentHiglight;
}

export interface DocumentHiglight {
  body: Array<string>;
  title: Array<string>;
}

export interface Metadata {
  took_ms: number;
  total: MetadataTotal;
  size: number;
  page: number;
}

export interface MetadataTotal {
  value: number;
  relation: string;
}

// This one is always empty, so idea what it is for now
export interface Suggestion {

}