import { Component, Input, OnInit } from '@angular/core';
import { ImageCardContent } from '../../models/ImageCardContent.data';

@Component({
  selector: 'site-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
  @Input("content") content: ImageCardContent | undefined;
  @Input("showDescription") showDescription = true;

  constructor() { }

  ngOnInit(): void {
  }

}
