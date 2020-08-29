import { CrisisListComponent } from './../crisis-center/crisis-list/crisis-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const crisisCenterRoutes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(crisisCenterRoutes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }
