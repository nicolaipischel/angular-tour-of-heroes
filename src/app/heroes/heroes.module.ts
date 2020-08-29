import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './../heroes/hero-list/hero-list.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';


@NgModule({
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    HeroDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
