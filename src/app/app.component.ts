import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor()
  {
  }

  title = 'angular-kello';

  time = new Date();
  intervalId: any;

  date = new Date();
  TimeNow = new Date();
  timeSet: number = 1;
  interval: any;
  color1: string = '#06E703';
  color2: string = '#fac48e';
  frontcolor1: string = 'black';

  ngOnInit () : void {
    this.startTimer();
    
       // Using Basic Interval
       this.intervalId = setInterval(() => {
        this.time = new Date();
      }, 1000);
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeSet) {
        this.timeSet++;
      } else {
      }
      if(this.timeSet > 1){
        this.color1 = '#18E703';

      }
      if(this.timeSet > 2){
        this.color1 = '#d6ca1a';
        this.color2 = '#5d64e8';
        this.frontcolor1 = 'white';
      }
      if(this.timeSet > 3){
        this.color1 = '#5d64e8';
        this.frontcolor1 = 'white';
      }
      if(this.timeSet > 4){
        this.color1 = '#f099e3';
        this.frontcolor1 = 'black';

      }
      if(this.timeSet > 5){
        this.color1 = '#48f7ba';
        this.color2 = '#cccccc';
      }
      if(this.timeSet > 6){
        this.color1 = '#fac48e';
        this.resetTimer();
      }
  
    },10000) // change sections colors every 10 sec.
  }

  resetTimer() {
    this.timeSet = 1;
    this.color1 = '#06E703';
    this.color2 = '#fac48e';

  }

}
