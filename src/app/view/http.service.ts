import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../user';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private url: string = 'https://jsonplaceholder.typicode.com/albums';
  constructor(public http: HttpClient) {}
  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.url).pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }
}
