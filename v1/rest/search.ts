import type { Document, Metadata, Suggestion } from '../payloads/search';

export interface GetSearchResponse {
  documents: Array<Document>;
  metadata: Metadata;
  suggestions: Array<Suggestion>;
}