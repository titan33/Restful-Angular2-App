import {Content} from './content';
import { JsonConvert } from "json2typescript";

describe('Content', () => {
  it('should create an instance', () => {
    expect(new Content()).toBeTruthy();
  });

  it('should convert json to content object instance', () => {

    let content = new Content();

    let jsonPayload = `{
			                   "name": "70 Park Avenue Hotel",
			                   "city": {
				                          "name": "New York",
				                          "state": "NY",
				                          "country": "USA",
				                          "map": "40.714353, -74.005973"
			                            },
			                   "address": "70 Park Avenue",
			                   "zip": "10011"
                        }`;

    JsonConvert.debugMode = true; // print some debug data
    JsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    JsonConvert.valueCheckingMode = JsonConvert.ValueCheckingMode.DISALLOW_NULL; // never allow null
    // Map to the Link class
    try {
      content = JsonConvert.deserializeString(jsonPayload, Content);
      expect(content.name).toEqual("70 Park Avenue Hotel");
      expect(content.city).not.toBeNull();
      expect(content.city.name).toEqual("New York");
      expect(content.city.state).toEqual("NY");
      expect(content.city.country).toEqual("USA");
      expect(content.city.map).toEqual("40.714353, -74.005973");
      expect(content.address).toEqual("70 Park Avenue");
      expect(content.zip).toEqual("10011");
    } catch (e) {
      console.log((<Error>e));
    }
  });

});
