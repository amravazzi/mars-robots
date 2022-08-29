import { Orientation } from "../Orientation";
import { Command } from "./Command";
import { Planet } from "../Planets/Planet";

export class TurnRight extends Command {
  public currentOrientation;

  constructor(currentPlanet: Planet, currentOrientation: Orientation) {
    super(currentPlanet);
    this.currentOrientation = currentOrientation;
  }

  exec(): Orientation {
    return this.rotateClockwise();
  }

  private rotateClockwise(): Orientation {
    const nextOrientation =
      this.currentOrientation < 270 ? this.currentOrientation + 90 : 0;

    return nextOrientation;
  }
}
