import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class Sort {

  @JsonProperty("direction", String)
  public direction: string = undefined;

  @JsonProperty("property", String)
  public property: string = undefined;

  @JsonProperty("ignoreCase", Boolean)
  public ignoreCase: boolean = false;

  @JsonProperty("nullHandling", String)
  public nullHandling: string = undefined;

  @JsonProperty("ascending", Boolean)
  public ascending: boolean = true;
}
