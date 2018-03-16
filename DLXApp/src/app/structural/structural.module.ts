import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NgifComponent, NgswitchComponent, NgforComponent],
  exports: [NgifComponent, NgswitchComponent, NgforComponent]
})
export class StructuralModule { }
