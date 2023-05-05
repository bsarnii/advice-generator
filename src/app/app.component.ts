import { Component, OnInit } from '@angular/core';
import { HttpGetAdviceService, Advice } from './http-get-advice.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public httpGetAdvice:HttpGetAdviceService) {}

  advice!: Observable<string>
  id!: Observable<number>

  ngOnInit(){
    let getAdvice = this.httpGetAdvice.getHttpAdvice();
    this.advice = getAdvice
    .pipe(map((res) => {
      return res.slip.advice
    }))
    this.id = getAdvice
    .pipe(map((res) => {
      return res.slip.id
    }))
  }

  getNewAdvice(){
    let getAdvice = this.httpGetAdvice.getHttpAdvice();
    this.advice = getAdvice
    .pipe(map((res) => {
      return res.slip.advice
    }))
    this.id = getAdvice
    .pipe(map((res) => {
      return res.slip.id
    }))
  }

}

