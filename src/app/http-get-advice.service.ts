import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpGetAdviceService {

  constructor(private http: HttpClient) { }

   private url = "https://api.adviceslip.com/advice"

   getHttpAdvice():Observable<Advice>{
    return this.http.get<Advice>(this.url)
   }
}

export interface Advice {
  slip:{
    advice: string
    id: number
  }
}
