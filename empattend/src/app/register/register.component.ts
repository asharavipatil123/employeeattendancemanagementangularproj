import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpserviceService } from '../empservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input()
  registerDetails: any = {
    ename: '',
    email:'',
    password:'',
    role: '',
    phone: '',
    worklocation: '',
  };

  submitted = false;
  
  


  constructor(private service: EmpserviceService, public router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    alert('Employee datas are validated successfully!');
  }

  addEmployee() {
    console.log('From emp.comp.ts ' + this.registerDetails);
    this.service.createEmployee(this.registerDetails).subscribe((data: {}) => this.router.navigate(['/login']));
  }


}