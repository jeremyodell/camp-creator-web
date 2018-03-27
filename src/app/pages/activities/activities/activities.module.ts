import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities.component';
import { RouterModule } from '@angular/router';
import { DragulaModule } from 'ng2-dragula'
import { SharedModule } from '../../../shared/shared.module'


export const routes = [
  { path: '', component: ActivitiesComponent, pathMatch: 'full' },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    DragulaModule
  ],
  declarations: [ActivitiesComponent]
})
export class ActivitiesModule { }
