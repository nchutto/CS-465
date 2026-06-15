import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  Authentication,
  User
} from '../services/authentication';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  credentials: User = {
    email: '',
    password: ''
  };

  constructor(
    private authentication: Authentication,
    private router: Router
  ) {}

  public onLogin(): void {
    this.authentication.login(this.credentials).subscribe({
      next: (result) => {
        this.authentication.saveToken(result.token);
        this.router.navigate(['']);
      },
      error: (err) => {
        console.error('Login failed', err);
      }
    });
  }
}