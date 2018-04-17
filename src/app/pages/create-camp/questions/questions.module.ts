import { CampQuestionsComponent } from './camp-questions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DynamicFormQuestionComponent } from './dynamic-form-questions.component';
import { DynamicFormComponent } from './dynamic-form.component';
export const routes = [
  { path: '', component: CampQuestionsComponent, pathMatch: 'full' },
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,],
  exports: [],
  declarations: [CampQuestionsComponent, DynamicFormComponent, DynamicFormQuestionComponent],
  providers: [],
})
export class QuestionsModule { }
