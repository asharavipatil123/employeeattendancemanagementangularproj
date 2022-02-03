import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { employee } from './employee';


@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {
  
  private url: string = "http://localhost:8080/sprmvceam/employee";
  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  ValidateUser(email:any,password:any){
    return true;
}

  constructor(private http: HttpClient) {}
  getEmployeesFromService(): Observable<employee[]> {
    return this.http.get<employee[]>(this.url+'/allemp');
    
  }
  getEmployee(eid: any): Observable<employee> {
    return this.http
      .get<employee>(this.url + '/allemp/' + eid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  createEmployee(employee: any): Observable<employee> {
    console.log(employee);
    return this.http
      .post<employee>(
        this.url + '/createEmp',
        JSON.stringify(employee),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  updateEmployee(employee: any): Observable<employee> {
    console.log(employee);
    return this.http
      .put<employee>(
        this.url + '/updateEmp',
        JSON.stringify(employee),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }


  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code : ${error.status} \n Error Message : ${error.message} `;
    }

    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}


