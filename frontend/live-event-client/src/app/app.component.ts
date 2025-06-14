import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginComponent} from './Components/login/login.component';
import {EventListComponent} from './Components/event-list/event-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,          // wymagany do działania <router-outlet>
    LoginComponent,        // potrzebny, jeśli nie jest lazy-loaded
    EventListComponent     // jak wyżej
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {}
