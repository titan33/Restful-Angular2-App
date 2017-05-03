import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class City {

  @JsonProperty("name", String)
  public name: string = undefined;

  @JsonProperty("state", String)
  public state: string = undefined;

  @JsonProperty("country", String)
  public country: string = undefined;

  @JsonProperty("map", String)
  public map: string = undefined;

}
