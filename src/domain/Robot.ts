import { Orientation } from "../domain/Orientation";
import { Coordinate } from "../domain/Coordinate";
import { Planet } from "./Planets/Planet";
// import { Command } from "./Commands/Command";

// IsOutOfBounds

export class Robot {
  private readonly planet: Planet;
  public currentOrientation: Orientation;
  public currentCoordinate: Coordinate;
  public isLost: boolean;
  public commands: string[];

  constructor(
    planet: Planet,
    currentOrientation: Orientation,
    currentCoordinate: Coordinate,
    commands: string[]
  ) {
    this.planet = planet;
    this.currentOrientation = currentOrientation;
    this.currentCoordinate = currentCoordinate;
    this.isLost = false;
    this.commands = commands;
  }

  shouldMoveForward(nextCoordinate: Coordinate) {
    return this.planet.isCoordinateScented(nextCoordinate);
  }
}
