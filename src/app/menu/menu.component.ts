import { Component } from '@angular/core';
import { AuthService } from '../authentification/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {


  constructor(private authServ: AuthService) { 


    
  }

  isConnected: boolean = this.authServ.isLoggedIn; 
  
logout() {
this.authServ.doLogout()
}

}
