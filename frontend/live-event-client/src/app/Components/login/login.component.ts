import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from '../register/register.component';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RegisterComponent],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials = { username: '', password: '' };
  showRegister = true;

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe({
      next: () => this.router.navigate(['/events']),
      error: () => alert('Błędne dane logowania')
    });
  }

  toggleRegister(): void {
    this.showRegister = !this.showRegister;
  }
}
