import { Observable } from "rxjs";

export interface IReadService {
  byId(id: number|string, ...args: any[]): Observable<unknown>;
}
