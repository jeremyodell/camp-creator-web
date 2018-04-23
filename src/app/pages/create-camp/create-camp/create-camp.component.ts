import { QuestionControlService } from './questions/question-control.service';
import { QuestionService } from './questions/question.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-camp',
  templateUrl: './create-camp.component.html',
  styleUrls: ['./create-camp.component.scss']
})
export class CreateCampComponent implements OnInit {

  isLinear = true;
  questions = [];
  ceremonyQuestions = [];
  mealsQuestions = [];
  firstFormGroup: FormGroup;
  ceremonyFormGroup: FormGroup;
  mealsFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, service: QuestionService,
  controller: QuestionControlService) {
    this.questions = service.getQuestions();
    this.ceremonyQuestions = this.getQuestions('ceremony');
    this.mealsQuestions = this.getQuestions('meals');

    this.mealsFormGroup = controller.toFormGroup(this.mealsQuestions);
    this.ceremonyFormGroup = controller.toFormGroup(this.ceremonyQuestions);
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['']
    });
  }

  save(): void {
    console.log(this.mealsFormGroup);
  }

  getQuestions(type: string): any[] {
    return this.questions[type].questions;
  }

}
