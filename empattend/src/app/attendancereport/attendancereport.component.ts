import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { attdetailService } from '../attdetail.service';

@Component({
  selector: 'app-attendancereport',
  templateUrl: './attendancereport.component.html',
  styleUrls: ['./attendancereport.component.css']
})
export class AttendancereportComponent implements OnInit {

  public attdetail = [ ] as any;
  getAttDetailFromService: any;
  constructor(private eservice: attdetailService, private router: Router) { }

  public selectedId: number = 0;
  ngOnInit(): void {
    this.eservice
    .getAttDetailFromService()
    .subscribe((data: any) => (this.attdetail =data ));
}
      
  }


/*
  constructor() { }

  ngOnInit(): void {
  }

}
*/