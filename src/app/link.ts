import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class Link {

  @JsonProperty("rel", String)
  public rel: string  = undefined;

  @JsonProperty("href", String)
  public href: string = undefined;
}
