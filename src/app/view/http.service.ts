import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Task } from '../task';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private url: string = 'http://localhost:3200/api/tasks';
  constructor(public http: HttpClient) {}
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url).pipe(catchError(this.errorHandler));
  }
  addTask(data: any): Observable<Task[]> {
    return this.http
      .post<Task[]>(this.url, data)
      .pipe(catchError(this.errorHandler));
  }
  updateTask(id: any, data: any): Observable<Task[]> {
    return this.http
      .put<Task[]>(`${this.url}/${id}`, data)
      .pipe(catchError(this.errorHandler));
  }
  deleteTask(id: any): Observable<Task[]> {
    return this.http
      .delete<Task[]>(`${this.url}/${id}`)
      .pipe(catchError(this.errorHandler));
  }
  completeTask(id: any): Observable<Task[]> {
    return this.http
      .delete<Task[]>(`${this.url}/${id}/complete`)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error');
  }
}
