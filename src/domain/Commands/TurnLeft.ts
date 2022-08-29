import { Orientation } from "../Orientation";
import { Command } from "./Command";
import { Planet } from "../Planets/Planet";

export class TurnLeft extends Command {
  public currentOrientation;

  constructor(currentPlanet: Planet, currentOrientation: Orientation) {
    super(currentPlanet);
    this.currentOrientation = currentOrientation;
  }

  exec(): Orientation {
    return this.rotateCounterClockwise();
  }

  private rotateCounterClockwise(): Orientation {
    const nextOrientation =
      this.currentOrientation > 0 ? this.currentOrientation - 90 : 270;

    return nextOrientation;
  }
}
