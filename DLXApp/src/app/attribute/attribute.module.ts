import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NglassComponent } from './nglass/nglass.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NglassComponent, NgstyleComponent],
  exports: [NglassComponent, NgstyleComponent]
})
export class AttributeModule { }
