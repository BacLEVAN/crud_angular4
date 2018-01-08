import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';

import { UserService } from './user/user.service';
import { ProductComponent } from './product/product.component';
import { ProductInforComponent } from './product-infor/product-infor.component';
import { HomeComponent } from './home/home.component';

// import { AlertModule } from 'ng2-bootstrap';
// import { AppRoutingModule } from './app-routing/app-routing.module';
// import { MaterialModule, MdList, MdListItem } from '@angular/material';
// import {MaterialModule, MatButtonModule, MatCheckboxModule} from '@angular/material';
// import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ProductService } from './product/product.service';
import { Home2Service } from './home2/home2.service';
import { Home2InforService  } from './home2-infor/home2-infor.service';
import { Page3Service } from './page-3/page-3.service';
import { Page4Service } from './page-4/page-4.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth.guard';

// pagination page
import {NgxPaginationModule} from 'ngx-pagination';

// import { EmailDomainValidator } from './product/email.validate';

import { ForbiddenValidatorDirective } from './shared/forbidden-name.directive';
import { ForbiddenValidator1Directive } from './shared/forbidden-name-for-reactform.directive';

import { Home1Module } from './home1/home1.module';
import { Home2Component } from './home2/home2.component';
import { Home2InforComponent } from './home2-infor/home2-infor.component';
import { Page3Component } from './page-3/page-3.component';
import { Page4Component } from './page-4/page-4.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NavComponent,
    AboutComponent,
    ProductComponent,
    ProductInforComponent,
    HomeComponent,
    // EmailDomainValidator,
    ForbiddenValidatorDirective,
    ForbiddenValidator1Directive,
    Home2Component,
    Home2InforComponent,
    Page3Component,
    Page4Component,
    LoginComponent,
    AdminComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    Home1Module
    // MaterialModule
    // MatButtonModule,
    // AlertModule
  ],
  providers: [UserService
    , ProductService
    , Home2Service
    , Home2InforService
    , Page3Service
    , Page4Service
    , AuthService
    , AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
