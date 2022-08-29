import { Coordinate } from "./Coordinate";
import { Orientation } from "./Orientation";

export class Output {
  public readonly finalPostion;
  public readonly finalOrientation;

  constructor(finalPostion: Coordinate, finalOrientation: Orientation) {
    this.finalPostion = finalPostion;
    this.finalOrientation = finalOrientation;
  }


}
