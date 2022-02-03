import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { leavedetailService } from '../leavedetail.service';

@Component({
  selector: 'app-leavereport',
  templateUrl: './leavereport.component.html',
  styleUrls: ['./leavereport.component.css']
})
export class LeavereportComponent implements OnInit {

  public leave = [ ] as any;
  getLeaveDetailFromService: any;
  constructor(private eservice: leavedetailService, private router: Router) { }

  public selectedId: number = 0;
  ngOnInit(): void {
    this.eservice
    .getLeaveDetailFromService()
    .subscribe((data: any) => (this.leave =data ));
}
      
  }


/*
  constructor() { }

  ngOnInit(): void {
  }

}
*/