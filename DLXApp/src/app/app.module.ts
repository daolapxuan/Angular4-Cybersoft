import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OnewayBindingModule } from './oneway-binding/oneway-binding.module';
import { TwowayBindingModule } from './twoway-binding/twoway-binding.module';
import { ExerciseModule } from './exercise/exercise.module';
// Muốn xài twowaybinding phải thêm FormsModule
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    OnewayBindingModule,
    FormsModule,
    TwowayBindingModule,
    ExerciseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
