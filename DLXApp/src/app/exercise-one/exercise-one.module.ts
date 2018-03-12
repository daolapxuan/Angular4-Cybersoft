import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, ContentComponent, SidebarComponent, FooterComponent],
  exports: [ HeaderComponent, ContentComponent, SidebarComponent, FooterComponent ]
})
export class ExerciseOneModule { }
