import { Orientation } from "../domain/Orientation";
import { Coordinate } from "../domain/Coordinate";
import { Planet } from "./Planets/Planet";

// IsOutOfBounds

export class Robot {
  private readonly planet: Planet;
  public currentOrientation: Orientation;
  public isLost: boolean;

  constructor(planet: Planet, currentOrientation: Orientation) {
    this.planet = planet;
    this.currentOrientation = currentOrientation;
    this.isLost = false;
  }

  shouldMoveForward(nextCoordinate: Coordinate) {
    return this.planet.isCoordinateScented(nextCoordinate);
  }
}
