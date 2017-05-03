import { Injectable } from '@angular/core';
import { HotelPage } from "./hotel-page";
import { Http } from "@angular/http";
import { JsonConvert } from "json2typescript";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class HotelService {


  hotelsPage : HotelPage;

  constructor(private http: Http) {

    JsonConvert.debugMode = true; // print some debug data
    JsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    JsonConvert.valueCheckingMode = JsonConvert.ValueCheckingMode.DISALLOW_NULL; // never allow null
  }

  // retrieveCityHotels(city: string, country: string) : void {
  //
  //   this.fetchCityHotels(city,country).subscribe(
  //     data => {this.displayCityHotels(JSON.stringify(data)) },
  //     error => { console.log("Error happened" + error)}
  //   );
  // }
  //
  // displayCityHotels (jasonData: string) : HotelPage {
  //
  //   let hotelsPage = JsonConvert.deserializeString(jasonData, HotelPage);
  //   console.log("RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR" + hotelsPage.size);
  //   return hotelsPage;
  // }
  //
  // fetchCityHotels(city: string, country: string, page?: Number, size?: Number, sort?: String ): Observable<HotelPage> {
  //
  //    // return this.http.get(`/hotels/${city}/${country}?page=${page}&size=${size}&sort=${sort}`).map(response => response.json());
  //   // return this.http.get(`/hotels/${city}/${country}`).map(response => response.json());
  //   return this.http.get(`/hotels/${city}/${country}`).do(res => console.log('HTTP response:' , res)).map(response => response.json()).do(console.log);
  //
  // }

  retrieveCityHotels(city: string, country: string, page: Number = 0, size: Number = 3, sort: string = 'ASC') : Observable<HotelPage>  {

    return this.http.get(`/hotels/${city}/${country}?page=${page}&size=${size}&sort=${sort}`).do(res => console.log('HTTP response:' , res)).map(response => response.json()).do(console.log);
  }

}
