import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TutorialListService {

  constructor( private http: HttpClient ) {
  }
  // tslint:disable-next-line: typedef
  getItems( url: string ) {
    return this.http.get(url);
  }
}
