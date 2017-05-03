import {Sort} from './sort';
import { JsonConvert } from "json2typescript";

describe('Sort', () => {
  it('should create an instance', () => {
    expect(new Sort()).toBeTruthy();
  });

  it('should convert json to sort object instance', () => {

    let sort = new Sort();

    let jsonPayload = `{
			                   "direction": "ASC",
			                   "property": "name",
			                   "ignoreCase": false,
			                   "nullHandling": "NATIVE",
			                   "ascending": true
                        }`;

    JsonConvert.debugMode = true; // print some debug data
    JsonConvert.ignorePrimitiveChecks = false; // don't allow assigning number to string etc.
    JsonConvert.valueCheckingMode = JsonConvert.ValueCheckingMode.DISALLOW_NULL; // never allow null
    // Map to the Link class
    try {
      sort = JsonConvert.deserializeString(jsonPayload, Sort);
      expect(sort.direction).toEqual("ASC");
      expect(sort.property).toEqual("name");
      expect(sort.ignoreCase).toEqual(false);
      expect(sort.nullHandling).toEqual("NATIVE");
      expect(sort.ascending).toEqual(true);
    } catch (e) {
      console.log((<Error>e));
    }
  });

});
