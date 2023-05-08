import { Component, OnInit } from '@angular/core';
import { HttpGetAdviceService, Advice, Error, AdviceOrError } from './http-get-advice.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public httpGetAdvice:HttpGetAdviceService) {}

  advice!: Observable<string>
  id!: Observable<number | null>

  ngOnInit(){
    this.getNewAdvice();
  }

  getNewAdvice(){
    this.httpGetAdvice.getData();
    this.advice = this.httpGetAdvice.getDataSubject().pipe(map((res:AdviceOrError) => {
      if ("slip" in res){
        return res.slip.advice
      } else {
        return res.message.text
      }
    }))
    this.id = this.httpGetAdvice.getDataSubject().pipe(map((res:AdviceOrError) => {
      if ("slip" in res){
        return res.slip.id
      } else {
        return null
      }
    }))
  }

}

