import { Coordinate } from "../Coordinate";
import { Orientation } from "../Orientation";
import { Command } from "./Command";

export class MoveForward extends Command {
  public currentCoordinate;
  public readonly currentOrientation;

  constructor(currentCoordinate: Coordinate, currentOrientation: Orientation) {
    super();
    this.currentCoordinate = currentCoordinate;
    this.currentOrientation = currentOrientation;
  }

  exec() {
    return this.possibleNextPosition();
  }

  private possibleNextPosition(): Coordinate {
    let nextCoordinateX = this.currentCoordinate.x;
    let nextCoordinateY = this.currentCoordinate.y;

    const orientation =
      typeof this.currentOrientation === "string"
        ? Orientation[this.currentOrientation]
        : this.currentOrientation;

    if (orientation === Orientation.N) {
      nextCoordinateY++;
    }
    if (orientation === Orientation.E) {
      nextCoordinateX++;
    }
    if (orientation === Orientation.S) {
      nextCoordinateY--;
    }
    if (orientation === Orientation.W) {
      nextCoordinateX--;
    }

    const nextCoordinate = new Coordinate(nextCoordinateX, nextCoordinateY);

    return nextCoordinate;
  }
}
