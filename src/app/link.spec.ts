import {Link} from './link';
import { JsonConvert } from "json2typescript";

describe('Link', () => {
  it('should create an instance', () => {
    expect(new Link()).toBeTruthy();
  });

  it('should convert json to link object instance', () => {

    let link = new Link();

    let jsonPayload = `{
			                   "rel": "next",
			                   "href": "http://localhost:8080/hotels/New%20York/USA?page=1&size=1&sort=asc"
                        }`;

    JsonConvert.debugMode = true; // print some debug data
    JsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    JsonConvert.valueCheckingMode = JsonConvert.ValueCheckingMode.DISALLOW_NULL; // never allow null
    // Map to the Link class
    try {
      link = JsonConvert.deserializeString(jsonPayload, Link);
      expect(link.rel).toEqual("next");
      expect(link.href).toEqual("http://localhost:8080/hotels/New%20York/USA?page=1&size=1&sort=asc");
    } catch (e) {
      console.log((<Error>e));
    }
  });
});
