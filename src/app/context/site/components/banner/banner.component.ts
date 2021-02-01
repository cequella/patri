import { Component, Input, OnInit } from '@angular/core';
import { ImageCardContent } from '../../models/ImageCardContent.data';

@Component({
  selector: 'site-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input("content") content: ImageCardContent[] | undefined;
  @Input("showDescription") showDescription = true;

  constructor() { }

  ngOnInit(): void {
  }

}
