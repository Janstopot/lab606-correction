import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  private readonly baseURL = 'http://localhost:8080/form'

  constructor(private http : HttpClient) { }

  postToDB(body : Object): Observable<any>{
    return this.http.post<any>(this.baseURL, body)

  } 
}
