import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ImageCardContent } from '../models/ImageCardContent.data';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private readonly content: ImageCardContent[] = [
    {id: 0, path: 'assets/placeholders/photo-1548625149-9129dad5eef7.jpg', name: "Test", description: "Content here"},
    {id: 0, path: 'assets/placeholders/photo-1495563381401-ecfbcaaa60f2.jpg', name: "Test", description: "Content here"},
    {id: 0, path: 'assets/placeholders/photo-1595433562696-a8b1cb8bdad1.jpg', name: "Test", description: "Content here"},
    {id: 0, path: 'assets/placeholders/photo-1489365091240-6a18fc761ec2.jpg', name: "Test", description: "Content here"},
  ];

  constructor() { }

  all(): Observable<ImageCardContent[]> {
    return of(this.content);
  }
}
