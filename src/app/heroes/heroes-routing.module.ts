import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


const heroRoutes: Routes = [
  { path: 'heroes', component: HeroListComponent },
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'dashboard', component: HeroDashboardComponent}

];

@NgModule({
  imports: [RouterModule.forChild(heroRoutes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
