import { FormsModule } from '@angular/forms';
import { CrisisListComponent } from './../crisis-center/crisis-list/crisis-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisCenterRoutingModule } from './crisis-center-routing.module';


@NgModule({
  declarations: [CrisisListComponent],
  imports: [
    CommonModule,
    CrisisCenterRoutingModule
  ]
})
export class CrisisCenterModule { }
