import { QuestionControlService } from './question-control.service';
import { FormGroup } from '@angular/forms';
import { Component, Input }       from '@angular/core';
import { QuestionService  } from './question.service';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'camp-questions',
  template: `
    <div fxLayout="row wrap" fxLayoutAlign="space-between stretch" fxLayoutGap="20px">
      <app-dynamic-form [formGroup]="formGroup" [questions]="getQuestionsByType()"></app-dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class CampQuestionsComponent {
  @Input() type: string;
  @Input() formGroup: FormGroup;
  questions: any[];

  constructor(service: QuestionService, controller: QuestionControlService) {
    this.questions = service.getQuestions();
  }

  getQuestionsByType(){
    if(this.type){
      return this.questions[this.type].questions;
    }
  }
}
