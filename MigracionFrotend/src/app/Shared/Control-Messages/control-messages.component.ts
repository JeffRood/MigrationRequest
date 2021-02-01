import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from './validation.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'control-messages',
  template: '<span *ngIf="errorMessage">{{ errorMessage }}</span>',
})
// tslint:disable-next-line:component-class-suffix
export class ControlMessages {
  errorMessage2: string;
  // @ViewChild(ControlMessages) control: ControlMessages;
  @Input() control: FormControl;
  @Input() submmitted: boolean;
  constructor() {}

  get errorMessage() {
    // debugger;
    for (let propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.submmitted) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }
}
