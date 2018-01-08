import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home1Component } from './home1/home1.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Home1Component],
  providers: [],
  exports: [Home1Component],
  // bootstrap: [Home1Component]
})
export class Home1Module { }
