import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { JsonConvert } from "json2typescript";
import 'rxjs/add/operator/map'
import {HotelService} from "./hotel.service";
import {HotelPage} from "./hotel-page";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HotelService]
})
export class AppComponent implements OnInit {

  title = 'City Hotels';
  hotelsPage: Array<HotelPage> = [];
  // @Input() results: Observable<any>;
  // @Output() searchEvent: EventEmitter<any> = new EventEmitter();

  constructor(private hotelService: HotelService) {
  }

  ngOnInit(): void {
    this.retrieveHotels();
  }

  onSearch(inputCity: string,inputCountry: string,inputPage: number, maxPage: number): void {

    this.hotelService.retrieveCityHotels(inputCity, inputCountry,inputPage,maxPage,'ASC');
    this.hotelsPage.pop();
    this.hotelsPage = this.hotelService.hotelsPage;
  }

  retrieveHotels(): void {

    this.hotelService.retrieveCityHotels('Sydney', 'Australia',0,3,'DESC');
    this.hotelsPage = this.hotelService.hotelsPage;
  }

}
