import { Orientation } from "../Orientation";
import { Command } from "./Command";

export class TurnLeft extends Command {
  public currentOrientation;
  TURN_STEP: number = 90;

  constructor(currentOrientation: Orientation) {
    super();
    this.currentOrientation = currentOrientation;
  }

  exec(): Orientation {
    return this.rotateCounterClockwise();
  }

  private rotateCounterClockwise(): Orientation {
    const nextOrientation =
      this.currentOrientation > 0 ? this.currentOrientation - this.TURN_STEP : 270;

    return nextOrientation;
  }
}
