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
    FormsModule,
    // FormGroup,
    FormControl,
    ValidatorFn,
    Validator,
    AbstractControl
} from '@angular/forms';

// thực hiện công việc validate
export function forbiddenNameValidator1(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const forbidden = nameRe.test(control.value);

        // forbiddenName1 là thuộc tính sẽ kiểm tra trên view tương ứng
        return forbidden ? { 'forbiddenName1': { value: control.value } } : null;
    };
}

@Directive({
    // bắt buộc phải có
    selector: '[forbiddenName1]',
    // selector: '[appForbiddenName]',
    // providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => ForbiddenValidatorDirective), multi: true}]
    // providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true}]
  })

export class ForbiddenValidator1Directive implements Validator {
@Input() forbiddenName1: string;

validate(control: AbstractControl): {[key: string]: any} {
    console.log(this.forbiddenName1);
    return this.forbiddenName1 ? forbiddenNameValidator1(new RegExp(this.forbiddenName1, 'i'))(control) : null;
}
}
