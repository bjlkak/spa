import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserData: User = { password: '' };
  allowedPassword = '1234';
  passwordInvalid = false;
  constructor(private _auth: AuthService, private router: Router) {}
  ngOnInit() {}

  loginUser() {
    if (
      this.loginUserData.password == this.allowedPassword
    ) {
      console.log('login success');
      localStorage.setItem('token', 'secretToken');
      localStorage.setItem('is_admin', 'true');
      this.router.navigate(['/p4']);
    }
    else {
      this.passwordInvalid = true;
    }
  }
}

export interface User {
  password: string;
}
