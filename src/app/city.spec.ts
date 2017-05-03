import {City} from './city';
import { JsonConvert } from "json2typescript";

describe('City', () => {
  it('should create an instance', () => {
    expect(new City()).toBeTruthy();
  });


  it('should convert json to city object instance', () => {

    let city = new City();

    let jsonPayload = `{
				                "name": "New York",
				                "state": "NY",
				                "country": "USA",
				                "map": "40.714353, -74.005973"
                        }`;
    JsonConvert.debugMode = true; // print some debug data
    JsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    JsonConvert.valueCheckingMode = JsonConvert.ValueCheckingMode.DISALLOW_NULL; // never allow null
    // Map to the country class
    // let country: Country;
    try {
      city = JsonConvert.deserializeString(jsonPayload, City);
      expect(city.name).toEqual("New York");
      expect(city.state).toEqual("NY");
      expect(city.country).toEqual("USA");
      expect(city.map).toEqual("40.714353, -74.005973");
    } catch (e) {
      console.log((<Error>e));
    }

  });

});
