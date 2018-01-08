import {
    NgModule,
    Component,
    OnInit,
    ViewChild,
    Directive,
    Inject,
    Input,
} from '@angular/core';

import {
    NG_VALIDATORS,
    FormsModule,
    FormGroup,
    FormControl,
    ValidatorFn,
    Validators
} from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

// class Signup {
//   constructor(public firstName: string = '',
//               public lastName: string = '',
//               public email: string = '',
//               public password: string = '',
//               public language: string = '') {
//   }
// }

function emailDomainValidator(control: FormControl) {
  let email = control.value;
  if (email && email.indexOf("@") != -1) {
    let [_, domain] = email.split("@");
    if (domain !== "codecraft.tv") {
      return {
        emailDomain: {
          parsedDomain: domain
        }
      }
    }
  }
  return null;
}

@Directive({
  selector: '[emailDomain][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: emailDomainValidator,
      multi: true
    }
  ]
})

export class EmailDomainValidator {}