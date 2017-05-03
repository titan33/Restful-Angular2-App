import {JsonObject, JsonProperty} from "json2typescript";
import {City} from "./city";

@JsonObject
export class Content {

  @JsonProperty("name", String)
  public name: string = undefined;

  @JsonProperty("city", City)
  public city: City = undefined;

  @JsonProperty("address", String)
  public address: string = undefined;

  @JsonProperty("zip", String)
  public zip: string = undefined;

}
