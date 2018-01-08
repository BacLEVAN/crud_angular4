import {
    // NgModule,
    Component,
    OnInit,
    Directive,
    // Inject,
    Input,
    // forwardRef, Attribute
} from '@angular/core';

import {
    NG_VALIDATORS,
    FormsModule,
    // FormGroup,
    FormControl,
    ValidatorFn,
    Validator,
    AbstractControl
} from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const forbidden = nameRe.test(control.value);
      console.log(forbidden);
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
}

@Directive({
    selector: '[forbiddenName]',
    // selector: '[appForbiddenName]',
    // providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => ForbiddenValidatorDirective), multi: true}]
    providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
  })

  export class ForbiddenValidatorDirective implements Validator {
    @Input() forbiddenName: string;
    
    validate(control: AbstractControl): {[key: string]: any} {
      // console.log(this.forbiddenName);
      return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) : null;
    }
  }