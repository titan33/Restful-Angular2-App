import { Injectable } from '@angular/core';
import { HotelPage } from "./hotel-page";
import { Http } from "@angular/http";
import { JsonConvert } from "json2typescript";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {Subscription} from "rxjs/Subscription";

@Injectable()
export class HotelService {


  hotelsPage: Array<HotelPage> = [];

  constructor(private http: Http) {

    JsonConvert.debugMode = true; // print some debug data
    JsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    JsonConvert.valueCheckingMode = JsonConvert.ValueCheckingMode.DISALLOW_NULL; // never allow null
  }

  retrieveCityHotels(city: string, country: string, page: Number = 0, size: Number = 3, sort: string = 'ASC') : Subscription {

    return this.http.get(`/hotels/${city}/${country}?page=${page}&size=${size}&sort=${sort}`).
                                                do(res => console.log('HTTP response:' , res)).
                                         map(response => response.json()).subscribe(data => {this.hotelsPage.pop();
                                                                                             this.hotelsPage.push(JsonConvert.deserializeString(JSON.stringify(data), HotelPage))},
                                                                                    error => console.log("Error happened" + error),
                                                                                    () => console.log("service completed"));
  }

}
