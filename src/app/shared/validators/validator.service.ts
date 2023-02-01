import { Injectable } from '@angular/core';

import { FormControl, ValidationErrors } from "@angular/forms";
import * as moment from "moment";


@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  dateValidator (control: FormControl): ValidationErrors | null {
    if (control.value) {
      const date = moment(control.value);
      const today = moment();
      if (today.isBefore(date)) {
        return { 'invalidDate': true }
      }
    }
    return null;
  }
}
