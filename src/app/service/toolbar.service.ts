import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  private readonly APP_NAME = "Patri";

  private title$ = new BehaviorSubject<string>(this.APP_NAME);

  constructor() { }

  get title(): Observable<string> {
    return this.title$;
  }

  changeTitle(content?: string): void {
    this.title$.next(content||this.APP_NAME);
  }
}
