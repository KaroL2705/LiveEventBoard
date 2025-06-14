import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { EventListComponent } from './Components/event-list/event-list.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'events', component: EventListComponent }
];
