import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

/**
 * @title Stepper overview
 */
@Component({
  selector: 'campout-builder',
  templateUrl: 'campout-builder.component.html',
  styleUrls: ['campout-builder.component.scss']
})
export class CampoutBuilderComponent {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

    //Datepicker start date
    startDate = new Date(1990, 0, 1);

    //Datepicker with min & max validation
    minDate = new Date(2010, 0, 1);
    maxDate = new Date(2020, 0, 1);
  
    //Datepicker with filter validation
    myFilter = (d: Date): boolean => {
      const day = d.getDay();
      return day !== 0 && day !== 6;
    }
  
    //Datepicker input and change events
    events: string[] = [];
    addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
      this.events.push(`${type}: ${event.value}`);
    }
}
