import { Coordinate } from "../Coordinate";
import { Planet } from "./Planet";

export class Mars implements Planet {
  xBoundary: number;
  yBoundary: number;
  scentedCoordinates: Coordinate[];

  constructor(coordinate: Coordinate) {
    this.xBoundary = coordinate.x;
    this.yBoundary = coordinate.y;
    this.scentedCoordinates = [];
  }

  createScentedCoordinate(coordinate: Coordinate): void {
    this.scentedCoordinates.push(coordinate);
  }

  isCoordinateScented(coordinate: Coordinate): boolean {
    return this.scentedCoordinates.includes(coordinate);
  }
}
