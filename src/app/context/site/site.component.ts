import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToolbarService } from 'src/app/service/toolbar.service';

@Component({
  selector: 'site-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {
  title$: Observable<string>;

  constructor(private toolbarService: ToolbarService) {
    this.title$ = this.toolbarService.title;
  }

  ngOnInit(): void {
  }

}
