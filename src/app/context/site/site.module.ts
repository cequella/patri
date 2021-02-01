import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site.component';
import { SiteRoutingModule } from './site.routing';

import { IvyCarouselModule } from 'angular-responsive-carousel';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';

import { HomeComponent } from './page/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { MuseumListComponent } from './components/museum-list/museum-list.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { MuseumProfileComponent } from './page/museum-profile/museum-profile.component';
import { IdResolverService } from 'src/app/guard/id-resolver.service';
import { MuseumService } from './service/museum.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RateViewComponent } from './components/rate-view/rate-view.component';

@NgModule({
  declarations: [
    SiteComponent,
    HomeComponent,
    BannerComponent,
    MuseumListComponent,
    ImageCardComponent,
    MuseumProfileComponent,
    RateViewComponent,
  ],
  imports: [
    CommonModule,
    SiteRoutingModule,
    IvyCarouselModule,
    FontAwesomeModule,
    // Material components
    MatToolbarModule,
    MatCardModule,
    MatRippleModule,
  ],
  bootstrap: [SiteComponent],
  providers: [
    {
      provide: "MuseumByIdProvider",
      useFactory: () => new IdResolverService(new MuseumService())
    }
  ]
})
export class SiteModule {}
