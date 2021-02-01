import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { IReadService } from '../templates/iread-service';

@Injectable({
  providedIn: 'root'
})
export class IdResolverService implements Resolve<unknown> {

  constructor(
    @Inject("IReadService") private service: IReadService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<unknown> {
    const id = route.paramMap.get("id");

    if(!id) {
      throw throwError("Id param not found");
    }

    return this.service.byId(id);
  }
}
