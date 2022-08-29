import { Coordinate } from "../domain/Coordinate";
import { Planet } from "./Planets/Planet";

// IsOutOfBounds

export class Robot {
  private readonly planet: Planet;

  constructor(planet: Planet) {
    this.planet = planet;
  }

  shouldMoveForward(nextCoordinate: Coordinate) {
    return this.planet.isCoordinateScented(nextCoordinate);
  }
}
