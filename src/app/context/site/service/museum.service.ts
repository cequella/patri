import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IReadService } from 'src/app/templates/iread-service';
import { ImageCardContent } from '../models/ImageCardContent.data';
import { Museum } from '../models/Museum.data';

@Injectable({
  providedIn: 'root',
})
export class MuseumService implements IReadService {
  constructor() {}

  byId(id: string | number, ...args: any[]): Observable<Museum> {
    const response: Museum = {
      id: 0,
      imageList: [
        {
          id: 0,
          path: 'assets/placeholders/photo-1548625149-9129dad5eef7.jpg',
          name: 'Test',
          description: 'Content here',
        },
        {
          id: 0,
          path: 'assets/placeholders/photo-1495563381401-ecfbcaaa60f2.jpg',
          name: 'Test',
          description: 'Content here',
        },
        {
          id: 0,
          path: 'assets/placeholders/photo-1595433562696-a8b1cb8bdad1.jpg',
          name: 'Test',
          description: 'Content here',
        },
        {
          id: 0,
          path: 'assets/placeholders/photo-1489365091240-6a18fc761ec2.jpg',
          name: 'Test',
          description: 'Content here',
        },
      ],
      name: 'Museu da Cachaça',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel leo in lorem pretium varius sit amet id nunc. Quisque interdum nec mi vel eleifend. Aliquam eu nulla vitae diam sodales tempus. Sed et imperdiet odio, et dignissim sapien. Nulla sed venenatis odio. Fusce non imperdiet dolor. Curabitur euismod lectus id bibendum suscipit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sem tellus, lacinia vitae nulla quis, lobortis hendrerit odio. Nulla quam lacus, ullamcorper vitae bibendum sed, malesuada a enim. Vivamus laoreet dignissim arcu, eget pellentesque tellus porta vitae. Pellentesque scelerisque libero semper, condimentum eros at, auctor elit. Vivamus viverra nunc vulputate dui accumsan lacinia. Ut ornare ultricies nulla non faucibus.`,
      phone: '(85) 3333-1234',
      price: 'R$ 45,00',
      rate: 2.0,
      site: 'www.jonh-doe.com.br',
    };
    return of(response);
  }
}
