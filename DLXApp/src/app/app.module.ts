import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FirstmoduleModule } from './firstmodule/firstmodule.module';
import { ExerciseOneModule } from './exercise-one/exercise-one.module';


import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent
  ],
  imports: [
    BrowserModule, FirstmoduleModule, ExerciseOneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
