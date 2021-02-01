import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToolbarService } from 'src/app/service/toolbar.service';
import { Museum } from '../../models/Museum.data';
import { faGlobeAmericas, faPhoneAlt, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'site-museum-profile',
  templateUrl: './museum-profile.component.html',
  styleUrls: ['./museum-profile.component.scss'],
})
export class MuseumProfileComponent implements OnInit {
  ticketIcon = faTicketAlt;
  phoneIcon = faPhoneAlt;
  webIcon = faGlobeAmericas;

  museum!: Museum;

  constructor(
    private activated: ActivatedRoute,
    private toolbarService: ToolbarService
  ) {}

  ngOnInit(): void {
    this.museum = this.activated.snapshot.data['content'];
    this.toolbarService.changeTitle(this.museum.name);
  }
}
