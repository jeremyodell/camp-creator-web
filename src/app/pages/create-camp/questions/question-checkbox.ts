import { QuestionBase } from './question-base';

export class CheckboxQuestion extends QuestionBase<string> {
  controlType = 'checkbox';
  labelPosition: 'after';

  constructor(options: {} = {}) {
    super(options);
    this.labelPosition = options['labelPosition'] || '';
  }
}
