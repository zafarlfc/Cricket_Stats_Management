import { Component } from '@angular/core';
import { ApiService } from '../../services/api';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ FIXED
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {

  username = '';
  password = '';
  error: string = '';

  constructor(private api: ApiService) { }

  login() {
    console.log("clicked"); // 👈 test

    this.api.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res: any) => {
        localStorage.setItem('token', res.access);
        alert('Login successful');
      },
      error: () => {
        this.error = 'Invalid username or password';
      }
    });
  }
}