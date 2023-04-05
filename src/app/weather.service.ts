import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Helsinki, Location } from './model/Helsinkitime';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private weatherserviceHTTP : HttpClient) { }

  // KESKEN
  //
  // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

  BASE_URL = 'https://api.weatherapi.com/v1/current.json?key=7036cc1503804fb8ade110135233103&q=helsinki&aqi=no';

  getHelsinkiData(): Observable<any> {
  return this.weatherserviceHTTP.get<any>(this.BASE_URL, this.httpOptions)

    // .pipe(retry(1), catchError(this.handleError)
 
    ;
  }
}

    // Error handling
    /*
    handleError(error: any) {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      window.alert(errorMessage);
      return throwError(() => {
        return errorMessage;
      });
    }
    */


