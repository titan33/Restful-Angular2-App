import {Content} from "./content";
import {Sort} from "./sort";
import {Link} from "./link";
import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class HotelPage {

  @JsonProperty("size", Number)
  public size: number = undefined;

  @JsonProperty("content", [Content])
  public content: Content[] = undefined;

  @JsonProperty("number", Number)
  public number: number = undefined;

  @JsonProperty("sort", [Sort])
  public sort: Sort[] = undefined;

  @JsonProperty("numberOfElements", Number)
  public numberOfElements: number = undefined;

  @JsonProperty("totalElements", Number)
  public totalElements: number = undefined;

  @JsonProperty("totalPages", Number)
  public totalPages: number = undefined;

  @JsonProperty("first", Boolean)
  public first: boolean = undefined;

  @JsonProperty("last", Boolean)
  public last: boolean = undefined;

  @JsonProperty("links", [Link])
  public links: Link[] = undefined;

}
