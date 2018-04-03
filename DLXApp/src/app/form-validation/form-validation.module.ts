import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { FormsModule } from '@angular/forms';
import { ExerciseComponent } from './exercise/exercise.component';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [FormValidationComponent, ExerciseComponent],
  exports: [FormValidationComponent, ExerciseComponent]
})
export class FormValidationModule { }
