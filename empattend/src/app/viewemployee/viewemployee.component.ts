import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpserviceService } from '../empservice.service';
import { employee } from '../employee';
@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})

export class ViewemployeeComponent implements OnInit {
  public employees = [ ] as any;
  getEmployeesFromService: any;
  constructor(private eservice: EmpserviceService, private router: Router) { }
  public selectedId: number = 0;
  ngOnInit(): void {
    this.eservice
      .getEmployeesFromService()
      .subscribe((data: any) => (this.employees =data ));
  }
  
  }
  