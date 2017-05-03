import {Component, OnInit} from '@angular/core';
import { JsonConvert } from "json2typescript";
import 'rxjs/add/operator/map'
import {HotelService} from "./hotel.service";
import {HotelPage} from "./hotel-page";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HotelService]
})
export class AppComponent implements OnInit {

  title = 'City Hotels';
  hotelsPages: Array<HotelPage> = [];

  constructor(private hotelService: HotelService) {
  }

  ngOnInit(): void {
    this.retrieveHotels();
  }

  retrieveHotels(): void {

    this.hotelService.retrieveCityHotels('Sydney', 'Australia',0,3,'DESC').subscribe(
      data => this.hotelsPages.push(JsonConvert.deserializeString(JSON.stringify(data), HotelPage)),
      error => console.log("Error happened" + error),
      () => console.log("service completed"))
  }
}
