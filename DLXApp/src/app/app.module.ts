import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StructuralModule } from './structural/structural.module';
import { AttributeModule } from './attribute/attribute.module';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    StructuralModule,
    AttributeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
