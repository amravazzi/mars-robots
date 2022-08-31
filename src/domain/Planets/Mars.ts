import { Coordinate } from "../Coordinate";
import { Planet } from "./Planet";

export class Mars implements Planet {
  xBoundary: number | RangeError;
  yBoundary: number | RangeError;
  scentedCoordinates: Coordinate[];

  constructor(coordinate: Coordinate) {
    this.xBoundary =
      coordinate.x <= 50
        ? coordinate.x
        : new RangeError("X boundary should be between 1 and 50");
    this.yBoundary =
      coordinate.y <= 50
        ? coordinate.y
        : new RangeError("Y boundary should be between 1 and 50");
    this.scentedCoordinates = [];
  }

  createScentedCoordinate(coordinate: Coordinate): void {
    this.scentedCoordinates.push(coordinate);
  }

  isCoordinateScented(coordinate: Coordinate): boolean {
    // return this.scentedCoordinates.includes(coordinate);
    for (let coord of this.scentedCoordinates) {
      if (coord.x === coordinate.x && coord.y === coordinate.y) {
        return true;
      }
    }
    return false;
  }

  isCoordinateOutOfBoundaries(coordinate: Coordinate): boolean {
    return coordinate.x > this.xBoundary || coordinate.y > this.yBoundary;
  }
}
