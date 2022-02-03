import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpserviceService } from '../empservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private empservice:EmpserviceService, public router:Router) { }

  ngOnInit(): void {
  }
  loginForm = new FormGroup({
    email : new FormControl(),
    pwd : new FormControl()
  })

  checkUser(){
    alert();
   var res = this.empservice.ValidateUser(this.loginForm.value["email"],this.loginForm.value["pwd"]);
   if(res){
     localStorage.setItem("email",this.loginForm.value["email"]);
     localStorage.setItem("pwd",this.loginForm.value["pwd"]);
     sessionStorage.setItem("email",this.loginForm.value["email"]);
     sessionStorage.setItem("pwd",this.loginForm.value["pwd"]);
     this.router.navigate(["/home"]);
   }else{
        alert("Invalid User");
   }
  }

}
