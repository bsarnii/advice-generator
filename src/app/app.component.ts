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

  ngOnInit(){
    this.advice = this.httpGetAdvice.getHttpAdvice()
    .pipe(map((res) => {
      return res.slip.advice
    }))
  }

  getNewAdvice(){
    this.advice = this.httpGetAdvice.getHttpAdvice()
    .pipe(map((res) => {
      return res.slip.advice
    }))
  }

}

