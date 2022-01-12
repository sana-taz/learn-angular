import { Injectable } from '@angular/core';
import { IUser } from './user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url: string = 'http://localhost:3200/api';
  constructor(public http: HttpClient) {}
  
  register(data: any): Observable<IUser[]> {
    return this.http 
      .post<IUser[]>(`${this.url}/register`, data)
      .pipe(catchError(this.errorHandler));
  }
  login(data: any): Observable<IUser[]> {
    return this.http 
      .post<IUser[]>(`${this.url}/login`, data)
      .pipe(catchError(this.errorHandler));
  }
  
  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }
}
