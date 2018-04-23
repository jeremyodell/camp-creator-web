import { CheckboxQuestion } from './question-checkbox';
import { Injectable }       from '@angular/core';

import { DropdownQuestion } from './question-dropdown';
import { QuestionBase }     from './question-base';
import { TextboxQuestion }  from './question-textbox';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getCeremonyQuestions() {
    const questions: QuestionBase<any>[] = [
      new CheckboxQuestion({
        key: 'camp-fire',
        label: 'Do you want a camp fire ceremony',
        labelPosition: 'after',
        order: 1
      }),
      new CheckboxQuestion({
        key: 'opening-ceremony',
        label: 'Do you want an opening flag ceremony',
        labelPosition: 'after',
        order: 2
      }),
      new CheckboxQuestion({
        key: 'closing-ceremony',
        label: 'Do you want a closing flag ceremony',
        labelPosition: 'after',
        order: 3
      }),
    ]
    return questions.sort((a, b) => a.order - b.order);
  }

  getMealQuestions() {
    const questions: QuestionBase<any>[] = [
    new CheckboxQuestion({
      key: 'cracker-barrell',
      label: 'Do you want a cracker barrel?',
      labelPosition: 'after',
      order: 2
    }),
    new CheckboxQuestion({
      key: 'meals-breakfast',
      label: 'Do you want a pack breakfast(s)',
      labelPosition: 'after',
      order: 3
    }),

    new CheckboxQuestion({
      key: 'meals-lunch',
      label: 'Do you want a pack lunch(es)',
      labelPosition: 'after',
      order: 4
    }),
    new CheckboxQuestion({
      key: 'meals-dinner',
      label: 'Do you want a pack dinner(s)',
      labelPosition: 'after',
      order: 5
    }),
  ]
  return questions.sort((a, b) => a.order - b.order);

  }

  getActivityQuestins() {

  }
  getQuestions() {
    const groupedQuestions: any[] = [];
    groupedQuestions['ceremony'] = {
      questions : this.getCeremonyQuestions()
    }
    groupedQuestions['meals'] = {
      questions : this.getMealQuestions()
    }
    return groupedQuestions;
  }
}
