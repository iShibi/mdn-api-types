import type { Geo, Waffle } from '../payloads/whoami';

export interface GetWhoamiResponse {
  geo: Geo,
  waffle: Waffle
}