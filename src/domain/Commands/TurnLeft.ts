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
    const orientation =
      typeof this.currentOrientation === "string"
        ? Orientation[this.currentOrientation]
        : this.currentOrientation;

    const nextOrientation =
      orientation > 0
        ? orientation - this.TURN_STEP
        : 270;

    console.log("TurnLeft", {
      startingOrientation: orientation,
      nextOrientation,
    });
    return nextOrientation;
  }
}
