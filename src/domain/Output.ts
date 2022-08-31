import { Coordinate } from "./Coordinate";
import { Orientation } from "./Orientation";
import { Planet } from "./Planets/Planet";
import { Robot } from "./Robot";

interface RobotReport {
  position: Coordinate;
  orientation: Orientation;
  isLost: boolean;
}
export class Output {
  public readonly robots;
  public readonly planet;

  constructor(robots: Robot[], planet: Planet) {
    this.robots = robots;
    this.planet = planet;
  }

  getReport(): RobotReport[] {

    return [];
  }
}
