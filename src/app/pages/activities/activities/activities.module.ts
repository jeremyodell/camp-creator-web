import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities.component';
import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: ActivitiesComponent, pathMatch: 'full' },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ActivitiesComponent]
})
export class ActivitiesModule { }
