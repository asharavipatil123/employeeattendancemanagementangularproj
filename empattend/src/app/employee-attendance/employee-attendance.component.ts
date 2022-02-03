import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { attdetailService } from '../attdetail.service';

@Component({
  selector: 'app-employee-attendance',
  templateUrl: './employee-attendance.component.html',
  styleUrls: ['./employee-attendance.component.css']
})
export class EmployeeAttendanceComponent implements OnInit {
  @Input()
  attDetails: any = {
    employeeid:'',
    adate: '',
    logon: '',
    logoff: '',
  };
  submitted = false;

  

  constructor(private service: attdetailService, public router: Router) { }
  
 
  ngOnInit(): void {
    
  }
  onSubmit() {
    this.submitted = true;
    alert('attdetails are validated successfully!');
  }

  addAttDetail() {
    console.log('From attdetail.comp.ts ' + this.attDetails);
    this.service.createAttDetail(this.attDetails).subscribe((data: {}) => this.router.navigate(['/reports/1/attendancereport']));
  }
}

