import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SiteComponent } from './site.component';
import { HomeComponent } from './page/home/home.component';
import { HomeResolverService } from './guard/home-resolver.service';
import { MuseumProfileComponent } from './page/museum-profile/museum-profile.component';

const routes: Routes = [
  {
    path: "",
    component: SiteComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
        resolve: {
          content: HomeResolverService
        }
      },
      {
        path: ":id",
        component: MuseumProfileComponent,
        resolve: {
          content: "MuseumByIdProvider"
        }
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
