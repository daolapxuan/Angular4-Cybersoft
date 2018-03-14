import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyComponent } from './property/property.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InterpolationComponent, PropertyComponent, EventBindingComponent], 
  exports: [InterpolationComponent, PropertyComponent, EventBindingComponent]
})
export class OnewayBindingModule { }
