import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

@Injectable()
export class AppService {
  url = 'https://localhost:5001/api/values';

  constructor(private http: HttpClient) { }

  getAppResponse(): Observable<HttpResponse<any>> {
    return this.http.get<any>(
      this.url, { observe: 'response' });
  }
}
