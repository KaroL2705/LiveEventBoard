import { Component } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.component.html',
  standalone: true
})
export class RegisterComponent {
  credentials = { username: '', password: '' };

  constructor(
    private auth: AuthService,
    private router: Router
    ) {}

  register(): void {
    this.auth.register(this.credentials).subscribe({
      next: () => this.router.navigate(['/events']),
      error: () => alert('Błędne dane logowania')
    });
  }
}
