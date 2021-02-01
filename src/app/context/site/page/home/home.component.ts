import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToolbarService } from 'src/app/service/toolbar.service';
import { ImageCardContent } from '../../models/ImageCardContent.data';

@Component({
  selector: 'site-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  images: ImageCardContent[] | undefined;

  constructor(private activated: ActivatedRoute) {}

  ngOnInit(): void {
    this.images = this.activated.snapshot.data['content'];
  }
}
