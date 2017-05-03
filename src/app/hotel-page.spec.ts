import {HotelPage} from './hotel-page';
import { JsonConvert } from "json2typescript";
import {Content} from "./content";
import {Sort} from "./sort";
import {Link} from "./link";

describe('HotelPage', () => {
  it('should create an instance', () => {
    expect(new HotelPage()).toBeTruthy();
  });

  it('should convert json into hotelPage object properties', () => {
    // ng test --poll 1000
    // let inputParam = JSON.stringify({size: 1,content: [{name: '70 Park Avenue Hotel',city: {name: 'New York',state: 'NY',country: 'USA',map: '40.714353, -74.005973'},
    //                                  address: "70 Park Avenue",zip: '10011'}],number: 0,
    //                                   sort: [{direction: 'ASC',property: 'name',ignoreCase: false,nullHandling: 'NATIVE',ascending: true}],
    //                                   numberOfElements: 1,totalElements: 3,totalPages: 3,first: true,last: false,
    //                                   links: [{rel: 'next',href: 'http://localhost:8080/hotels/New%20York/USA?page=1&size=1&sort=asc'},
    //                                     {rel: 'first',href: 'http://localhost:8080/hotels/New%20York/USA?page=0&size=1&sort=asc'},
    //                                     {rel: 'self',href: 'http://localhost:8080/hotels/New%20York/USA?page=0&size=1&sort=asc'}]});
    let hotelPage = new HotelPage();
    let jsonPayload = `{
	                      "size": 1,
	                      "content": [{
			                               "name": "70 Park Avenue Hotel",
			                               "address": "70 Park Avenue",
			                                "zip": "10011",
			                               "city": {
				                                      "name": "New York",
				                                      "state": "NY",
				                                      "country": "USA",
				                                      "map": "40.714353, -74.005973"
			                                        }
		                                 }],
	                      "number": 0,
	                      "sort": [{
			                            "direction": "ASC",
			                            "property": "name",
			                            "ignoreCase": false,
			                            "nullHandling": "NATIVE",
			                            "ascending": true
		                              }],
	                       "numberOfElements": 1,
	                       "totalElements": 3,
	                       "totalPages": 3,
	                       "first": true,
	                       "last": false,
	                       "links": [{
			                              "rel": "next",
			                              "href": "http://localhost:8080/hotels/New%20York/USA?page=1&size=1&sort=asc"
		                                 }, 
		                                 {
			                               "rel": "first",
			                               "href": "http://localhost:8080/hotels/New%20York/USA?page=0&size=1&sort=asc"
		                                 }, 
		                                 {
			                                "rel": "self",
			                                "href": "http://localhost:8080/hotels/New%20York/USA?page=0&size=1&sort=asc"
		                                  }]
                        }`;


    JsonConvert.debugMode = true; // print some debug data
    JsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    JsonConvert.valueCheckingMode = JsonConvert.ValueCheckingMode.DISALLOW_NULL; // never allow null
    // Map to the hotelPage class
    try {
      hotelPage = JsonConvert.deserializeString(jsonPayload, HotelPage);

      expect(hotelPage.size).toEqual(1);
      expect(hotelPage.content.length).toEqual(1);
      let content = <Content> hotelPage.content.pop();
      expect(content.name).toEqual("70 Park Avenue Hotel");
      expect(content.address).toEqual("70 Park Avenue");
      expect(content.zip).toEqual("10011");
      expect(content.city.name).toEqual("New York");
      expect(content.city.state).toEqual("NY");
      expect(content.city.country).toEqual("USA");
      expect(content.city.map).toEqual("40.714353, -74.005973");
      expect(hotelPage.number).toEqual(0);
      expect(hotelPage.sort.length).toEqual(1);
      let sort = <Sort> hotelPage.sort.pop();
      expect(sort.ascending).toEqual(true);
      expect(sort.direction).toEqual("ASC");
      expect(sort.ignoreCase).toEqual(false);
      expect(sort.nullHandling).toEqual("NATIVE");
      expect(sort.property).toEqual("name");
      expect(hotelPage.numberOfElements).toEqual(1);
      expect(hotelPage.totalElements).toEqual(3);
      expect(hotelPage.totalPages).toEqual(3);
      expect(hotelPage.first).toEqual(true);
      expect(hotelPage.last).toEqual(false);
      expect(hotelPage.links.length).toEqual(3);
      let link = <Link> hotelPage.links.pop();
      expect(link.href).toEqual("http://localhost:8080/hotels/New%20York/USA?page=0&size=1&sort=asc");
      expect(link.rel).toEqual("self");
      link = <Link> hotelPage.links.pop();
      expect(link.href).toEqual("http://localhost:8080/hotels/New%20York/USA?page=0&size=1&sort=asc");
      expect(link.rel).toEqual("first");
      link = <Link> hotelPage.links.pop();
      expect(link.href).toEqual("http://localhost:8080/hotels/New%20York/USA?page=1&size=1&sort=asc");
      expect(link.rel).toEqual("next");

    } catch (e) {
      console.log((<Error>e));
    }

  });
});
