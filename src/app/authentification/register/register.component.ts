import { Component } from '@angular/core';
import { AuthService } from 'src/app/authentification/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/authentification/user';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: User = new User();
  constructor(private authService: AuthService, private router: Router) { }


  register () {
    this.authService.signUp(this.user).subscribe((data) => {
      this.router.navigate(['/login']);
    })
  }
}
