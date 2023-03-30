import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(public datepipe: DatePipe)
  {
   // let currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss');
   // console.log(currentDateTime);
  }

  title = 'angular-kello';

  time = new Date();
  intervalId : any;

  date = new Date();
  TimeNow = new Date();
  timeSet: number = 0;
  interval: any;
  color1: string = '#06E703';

  ngOnInit () : void {
    this.startTimer();
    
       // Using Basic Interval
       this.intervalId = setInterval(() => {
        this.time = new Date();
      }, 1000);
  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.TimeNow) {
        this.timeSet++;
      } else {
      }
      if(this.timeSet > 1){
        this.color1 = '#18E703';
      }
      if(this.timeSet > 2){
        this.color1 = '#37E703';
      }
      if(this.timeSet > 3){
        this.color1 = '#59E703';
      }
      if(this.timeSet > 4){
        this.color1 = '#8AE703';
      }
      if(this.timeSet > 5){
        this.color1 = '#A9E703';
      }
      if(this.timeSet > 6){
        this.color1 = '#E7E703';
      }
    


    },5000) // interval 1000 = 1s, for demo 2500 per one = 2,5s
  }














  /*
  time = new Date();
  hours : number | undefined;
  msg: string = '';
  link: string = '';




  getCurrentDate() {
   setInterval(() => {
  this.time = new Date(); //set time variable with current date 
  }, 1000); // set it every one seconds
}

decide() {this.hours = new Date().getHours();                       
  console.log("this.hours",this.hours)

if (this.hours < 10) {
  this.msg = "Hyvää huomenta!"
  this.link = "www.yle.fi"
}



} */
}
