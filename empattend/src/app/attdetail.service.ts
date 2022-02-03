import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { attdetail } from './attdetail';

@Injectable({
  providedIn: 'root'
})
export class attdetailService {
  private url: string = 'http://localhost:8080/sprmvceam/attdetail';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) { }
  getAttDetailFromService(): Observable<attdetail[]> {
    return this.http.get<attdetail[]>(this.url+'/allAttDetail');
    
  }
  getAttDetail(aid: any): Observable<attdetail> {
    return this.http
      .get<attdetail>(this.url + '/allAttDetail/' + aid, this.httpOptions)
      .pipe(retry(1), catchError(this.handleError));
  }

  createAttDetail(attDetail: any): Observable<attdetail> {
    console.log(attDetail);
    return this.http
      .post<attdetail>(
        this.url + '/createAtt',
        JSON.stringify(attDetail),
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
