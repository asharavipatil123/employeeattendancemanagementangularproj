import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-reportdetails',
  templateUrl: './reportdetails.component.html',
  styleUrls: ['./reportdetails.component.css']
})
export class ReportdetailsComponent implements OnInit {
  constructor(public router:Router,public aroute:ActivatedRoute) { }
 public reportId:any;
  ngOnInit(): void {
    this.aroute.paramMap.subscribe((param) => {
      this.reportId = param.get('id');
    });
  }
  showWeekAttendance(){
    console.log('Week Attendance');
    this.router.navigate(['./attendancereport'],
    { relativeTo:this.aroute});
  }
  showRecentLeave(){
    console.log('Recent Leave');
    this.router.navigate(['./leavereport'],
    { relativeTo:this.aroute});
  }
}