import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { LeaveComponent } from './leave/leave.component';
import { ReportsComponent } from './reports/reports.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { EmployeerecordComponent } from './employeerecord/employeerecord.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LogonComponent } from './logon/logon.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportdetailsComponent } from './reportdetails/reportdetails.component';
import { LeavereportComponent } from './leavereport/leavereport.component';
import { AttendancereportComponent } from './attendancereport/attendancereport.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmployeeAttendanceComponent,
    
    ReportsComponent,
    ContactusComponent,
    ViewemployeeComponent,
    EmployeerecordComponent,
    LoginComponent,
    LogonComponent,
    RegisterComponent,
    ReportdetailsComponent,
    LeaveComponent,
    AttendancereportComponent,
    LeavereportComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
