import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private weatherserviceHTTP : HttpClient) { }

  // Http Options
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

  Helsinki_URL = 'https://api.weatherapi.com/v1/current.json?key=7036cc1503804fb8ade110135233103&q=helsinki&aqi=no';
  getHelsinkiData(): Observable<any> {
  return this.weatherserviceHTTP.get<any>(this.Helsinki_URL, this.httpOptions)}

  // Forecast Helsinki
  ForecastHelsinkiUrl ='http://api.weatherapi.com/v1/forecast.json?key=7036cc1503804fb8ade110135233103&q=Helsinki&days=1&aqi=no&alerts=yes';
  getHelsinkiForecastData(): Observable<any> {
    return this.weatherserviceHTTP.get<any>(this.ForecastHelsinkiUrl, this.httpOptions)
  }

  //
  // By city search
  //

  URL = 'https://api.weatherapi.com/v1/current.json?key=7036cc1503804fb8ade110135233103&q=';
  getCityData(cityid: string): Observable <any> {
  const cityweather = this.weatherserviceHTTP.get<any>(this.URL+cityid+'&aqi=no');
  return cityweather;
  } 
    
}


    
    


