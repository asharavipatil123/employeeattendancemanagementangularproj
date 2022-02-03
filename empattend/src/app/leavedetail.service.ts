import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { leavedetail } from './leavedetail';

@Injectable({
  providedIn: 'root'
})
export class leavedetailService {
  private url: string = "http://localhost:8080/sprmvceam/leavedetail";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }
  getLeaveDetailFromService(): Observable<leavedetail[]> {
    return this.http.get<leavedetail[]>(this.url+'/allLeavedetail');
    
  }
  getLeaveDetail(lid: any): Observable<leavedetail> {
    return this.http
      .get<leavedetail>(this.url + '/allLeavedetail/' + lid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  createLeave(leavedetail: any): Observable<leavedetail> {
    console.log(leavedetail);
    return this.http
      .post<leavedetail>(
        this.url + '/createLeave',
        JSON.stringify(leavedetail),
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
