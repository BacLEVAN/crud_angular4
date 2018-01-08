import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ProductInforComponent } from './product-infor/product-infor.component';
import { HomeComponent } from './home/home.component';
import { Home2Component } from './home2/home2.component';
import { Home2InforComponent } from './home2-infor/home2-infor.component';
import { Page3Component } from './page-3/page-3.component';
import { Page4Component } from './page-4/page-4.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
    RouterModule.forRoot([
         { path: 'user', component: UserComponent },
         { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
         { path: 'product', component: ProductComponent },
         { path: 'information/:id', component: ProductInforComponent },
         { path: 'home', component: HomeComponent },
         { path: 'home2', component: Home2Component },
         { path: 'page-3', component: Page3Component },
         { path: 'page-4', component: Page4Component },
        //  { path: 'home2', component: Home2Component },
         { path: 'user-infor/:id', component: Home2InforComponent },
         { path: 'user-infor/:id/:fg', component: Home2InforComponent },
         { path: 'login', component: LoginComponent },

    ], { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
 })
export class AppRoutingModule {}
