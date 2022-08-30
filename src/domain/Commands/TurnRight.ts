import { Orientation } from "../Orientation";
import { Command } from "./Command";
import { Planet } from "../Planets/Planet";

export class TurnRight extends Command {
  public currentOrientation;
  TURN_STEP: number = 90;

  constructor(currentOrientation: Orientation) {
    super();
    this.currentOrientation = currentOrientation;
  }

  exec(): Orientation {
    return this.rotateClockwise();
  }

  private rotateClockwise(): Orientation {
    const nextOrientation =
      this.currentOrientation < 270
        ? this.currentOrientation + this.TURN_STEP
        : 0;

    return nextOrientation;
  }
}
