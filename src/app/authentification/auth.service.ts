import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = "http://localhost:3001/api/users"
  constructor(private http: HttpClient, private router: Router) { }

  // Sing-up
  signUp(user: User):Observable<any> {
    return this.http.post(this.apiUrl+"/register/", user)
  }


  // Sign-in 
  // signIn(user: any): Observable<any>{
  //   return this.http.post<any>(this.apiUrl + "/login/", user).subscribe(
  //     {
  //       next: (res: any) => {
  //         localStorage.setItem('token', res.token);
  //       },error: (err: any) => {
  //         console.log("Sign In Error:", err)
  //       },
  //       complete: () => {
  //         this.router.navigate(['products/listarticlestable"']);
  //       }
  //     }
  //   )
  // }

  signIn(user: any) {
    return this.http
    .post<any>(this.apiUrl + "/login/" , user)
    .subscribe({
    next: (res:any) => {
    localStorage.setItem('access_token', res.token);
    },
    error: (e:any) => {
    console.log(e);
    alert("Error !")
    },
    complete: () => {
    this.router.navigate(['/']);
    }
    });
    }

    getToken() {
      return localStorage.getItem('access_token');
    }
  
    get isLoggedIn(): boolean {
      let authToken = localStorage.getItem('access_token');
      return authToken !== null ? true : false;
    }
  
    doLogout() {
      let removeToken = localStorage.removeItem('access_token');
      if (removeToken == null) {
      this.router.navigate(['login']);
      }
      }

}
