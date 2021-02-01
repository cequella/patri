import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ImageCardContent } from '../models/ImageCardContent.data';
import { HomeService } from '../service/home.service';

@Injectable({
  providedIn: 'root'
})
export class HomeResolverService implements Resolve<ImageCardContent[]> {

  constructor(private service: HomeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ImageCardContent[] | Observable<ImageCardContent[]> | Promise<ImageCardContent[]> {
    return this.service.all();
  }
}
