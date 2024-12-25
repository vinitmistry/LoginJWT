import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  username:string = '';
  password:string = '';
  constructor(private http:HttpClient, private Router:Router) { }

  Login(){
   const fullname = {username: this.username,password:this.password}
    this.http.post('http://localhost:3030/login',fullname).subscribe({
      next:(response:any)=>{
        console.log(this.username,this.password)
        localStorage.setItem('token', response.token);
        this.Router.navigate(['/main']);
        alert('Login Successfull');
      },error:(err)=>{
        alert(err.error.message || 'Login failed');
      }
    })
  }
}
