import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpGetAdviceService {

  constructor(private http: HttpClient) { }

   private url = "https://api.adviceslip.com/advice/"

   getHttpAdvice():Observable<Advice>{
    let randomNumber = Math.floor(Math.random()*219)
    return this.http.get<Advice>(this.url+randomNumber)
   }
}

export interface Advice {
  slip:{
    advice: string
    id: number
  }
}
