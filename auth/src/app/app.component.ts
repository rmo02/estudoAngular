import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Ramon';
  userData = {
    email: 'ramon.oliviera@email.com',
    role: 'Admin',
  }

  title = 'auth';
}
