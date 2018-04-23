import { QuestionControlService } from './questions/question-control.service';
import { QuestionService } from './questions/question.service';
import { DynamicFormComponent } from './questions/dynamic-form.component';
import { DynamicFormQuestionComponent } from './questions/dynamic-form-questions.component';
import { CampQuestionsComponent } from './questions/camp-questions';

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
  providers: [QuestionService, QuestionControlService],
  declarations: [CreateCampComponent, CampQuestionsComponent, DynamicFormQuestionComponent,
    DynamicFormComponent]
})
export class CreateCampModule { }
