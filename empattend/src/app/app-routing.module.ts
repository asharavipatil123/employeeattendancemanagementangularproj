import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AttendancereportComponent } from './attendancereport/attendancereport.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { EmployeerecordComponent } from './employeerecord/employeerecord.component';
import { HomeComponent } from './home/home.component';
import { LeaveComponent } from './leave/leave.component';
import { LeavereportComponent } from './leavereport/leavereport.component';
import { LoginComponent } from './login/login.component';
import { LogonComponent } from './logon/logon.component';
import { RegisterComponent } from './register/register.component';
import { ReportdetailsComponent } from './reportdetails/reportdetails.component';
import { ReportsComponent } from './reports/reports.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'employee_attendance', component: EmployeeAttendanceComponent},
  
  { path: 'leave', component: LeaveComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'viewemp', component: ViewemployeeComponent },
  {path: 'employeerecords', component:EmployeerecordComponent},
 { path: 'login', component:LoginComponent},
 { path: 'register', component:RegisterComponent},
 { path: 'logon', component:LogonComponent},
 { path: 'logoff', component:LogonComponent},
 {
  path: 'reports/:id',
  component: ReportdetailsComponent,
  children: [
    { path: 'attendancereport', component: AttendancereportComponent },
    { path: 'leavereport', component: LeavereportComponent },
  ],
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
