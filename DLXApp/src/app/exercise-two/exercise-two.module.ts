import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbartwoModule } from './navbartwo/navbartwo.module';
import { HeadertwoModule } from './headertwo/headertwo.module';
import { ContenttwoModule } from './contenttwo/contenttwo.module';
import { FootertwoModule } from './footertwo/footertwo.module';


@NgModule({
  imports: [
    CommonModule, NavbartwoModule, HeadertwoModule, ContenttwoModule, FootertwoModule
  ],
  exports: [NavbartwoModule, HeadertwoModule, ContenttwoModule, FootertwoModule],
  declarations: []
})
export class ExerciseTwoModule { }
