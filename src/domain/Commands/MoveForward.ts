import { Coordinate } from "../Coordinate";
import { Orientation } from "../Orientation";
import { Command } from "./Command";
import { Planet } from "../Planets/Planet";

export class MoveForward extends Command {
  public currentCoordinate;
  public currentOrientation;

  constructor(
    currentCoordinate: Coordinate,
    currentOrientation: Orientation,
  ) {
    super();
    this.currentCoordinate = currentCoordinate;
    this.currentOrientation = currentOrientation;
  }

  exec() {
    return this.possibleNextPosition();
  }

  private possibleNextPosition(): Coordinate {
    const nextCoordinate = new Coordinate(
      this.currentCoordinate.x,
      this.currentCoordinate.y
    );

    if (this.currentOrientation === Orientation.N) {
      nextCoordinate.y++;
    }
    if (this.currentOrientation === Orientation.E) {
      nextCoordinate.x++;
    }
    if (this.currentOrientation === Orientation.S) {
      nextCoordinate.y--;
    }
    if (this.currentOrientation === Orientation.W) {
      nextCoordinate.x--;
    }

    return nextCoordinate;
  }
}
