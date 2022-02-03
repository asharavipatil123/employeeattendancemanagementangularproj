import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  public reports =[
    {id:1,name:'attendancereport'},
    
  ];
  constructor(public router:Router) { }
  ngOnInit(): void {}
  onClick(report:any){
    this.router.navigate(['/reports',report.id])
  }
  }
