import { Component, Input, OnInit }  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { QuestionBase }              from './question-base';
import { QuestionControlService }    from './question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  providers: [ QuestionControlService ]
})
export class DynamicFormComponent  {

  @Input() questions: QuestionBase<any>[] = [];
  @Input() formGroup: FormGroup;
  payLoad = '';

  constructor(private qcs: QuestionControlService) {  }


}
