import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  username:string ='';
  email:string ='';
  password:string ='';
  constructor(private Http:HttpClient,private router: Router) { }

  register(){
    const fullname = {username: this.username,email : this.email,password : this.password}


    this.Http.post('http://localhost:3030/register',fullname).subscribe({
      next: (response:any) =>{
        alert("Login Successfull");
        this.router.navigate(['/login']);
      },
      error: (err) => {
        alert(err.error.message || 'Registration failed');
      }
    })
  }

}
