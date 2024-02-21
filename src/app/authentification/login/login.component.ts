import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  user: any = {}
  constructor(private authServ: AuthService, private router: Router) { }
  


  loginUser() {
    this.authServ.signIn(this.user)
  }



}
