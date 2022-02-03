import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { leavedetailService } from '../leavedetail.service';
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  @Input()
  leaveDetails: any = {
    ltype: '',
    reason: '',
    fromdate: '',
    todate: '',
  };
  submitted = false;


  constructor(private service: leavedetailService, public router: Router) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    alert('leavedetails are validated successfully!');
  }

  addLeave() {
    console.log('From leavedetail.comp.ts ' + this.leaveDetails);
    this.service.createLeave(this.leaveDetails).subscribe((data: {}) => this.router.navigate(['/reports/1/leavereport']));
  }
}


