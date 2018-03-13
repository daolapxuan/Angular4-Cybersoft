import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contenttwo1Component } from './contenttwo-1/contenttwo-1.component';
import { Contenttwo2Component } from './contenttwo-2/contenttwo-2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Contenttwo1Component, Contenttwo2Component],
  exports: [Contenttwo1Component, Contenttwo2Component]
})
export class ContenttwoModule { }
