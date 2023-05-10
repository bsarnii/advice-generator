import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpGetAdviceService {

  constructor(private http: HttpClient) { }

  private url = "https://api.adviceslip.com/advice/"
  private dataSubject:Subject<Advice> = new Subject();

   getData(){
    let randomNumber = Math.ceil(Math.random()*219)
    this.http.get<Advice>(this.url+randomNumber).subscribe(
      data => this.dataSubject.next(data)
    )
   }
   getDataSubject(){
    return this.dataSubject.asObservable();
   }

}

export interface Advice {
  slip:{
    advice: string
    id: number
  }
}
export interface Error {
  message:{
    type: string
    text: string
  }
}

export type AdviceOrError = Advice | Error
