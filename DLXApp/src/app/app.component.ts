import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Router';
  login() {
    localStorage.setItem('isAdmin', 'admin');
  }
  logout() {
    localStorage.setItem('isAdmin', '');
  }
}
