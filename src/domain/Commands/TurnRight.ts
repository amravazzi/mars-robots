import { Orientation } from "../Orientation";
import { Command } from "./Command";

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
    const orientation =
      typeof this.currentOrientation === "string"
        ? Orientation[this.currentOrientation]
        : this.currentOrientation;

    const nextOrientation =
      orientation < 270
        ? orientation + this.TURN_STEP
        : 0;

    // console.log("TurnRight", { orientation, nextOrientation });
    return nextOrientation;
  }
}
