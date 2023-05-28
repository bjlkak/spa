import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private _authService: AuthService, private router: Router){}

  ngOnInit() {
  }

  
  logoutUser(){
    localStorage.removeItem('token');
    localStorage.removeItem('is_admin');
    this.router.navigate(['/login']);
    return true;
  }

}