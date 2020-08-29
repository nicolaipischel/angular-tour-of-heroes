import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/heroes/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent  }
];

@NgModule({
  imports: [  RouterModule.forRoot(
    appRoutes,
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
