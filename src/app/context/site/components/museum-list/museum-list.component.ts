import { Component, Input, OnInit } from '@angular/core';
import { ImageCardContent } from '../../models/ImageCardContent.data';

@Component({
  selector: 'site-museum-list',
  templateUrl: './museum-list.component.html',
  styleUrls: ['./museum-list.component.scss'],
})
export class MuseumListComponent implements OnInit {
  @Input("title") title: string | undefined;
  @Input("content") content: ImageCardContent[] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
