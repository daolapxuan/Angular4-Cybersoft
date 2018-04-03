import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormValidationModule } from './form-validation/form-validation.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
