import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCampComponent } from './create-camp.component';
import { SharedModule } from '../../../shared/shared.module';
export const routes = [
  { path: '', component: CreateCampComponent, pathMatch: 'full' },
]
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CreateCampComponent]
})
export class CreateCampModule { }
