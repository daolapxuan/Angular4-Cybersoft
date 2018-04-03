import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { HomeProductComponent } from './home-product/home-product.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { ProtectService } from './protect.guard';

const appRouters: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'product', component: HomeProductComponent },
      { path: 'about', component: HomeAboutComponent }
    ]
  },
  { path: 'admin', component: AdminComponent, canActivate: [ProtectService] },
  
  { path: 'PageNotFound', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    HomeProductComponent,
    HomeAboutComponent,
    PagenotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRouters)
  ],
  exports: [RouterModule],
  providers: [ProtectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
