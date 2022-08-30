import { Robot } from "../domain/Robot";
import { Planet } from "../domain/Planets/Planet";
import { Coordinate } from "../domain/Coordinate";
import { Orientation } from "../domain/Orientation";
import { Move } from "./move";

export class MoveRobot implements Move {
  public robot;
  public planet;

  constructor(robot: Robot, planet: Planet) {
    this.robot = robot;
    this.planet = planet;
  }

  move() /*: Robot*/ {
    const commands = this.robot.commands;
    let finalPosition: Coordinate;
    let finalOrientation: Orientation;

    for (let comm of commands) {
      switch (comm) {
        case "F":
          break;

        default:
          break;
      }
    }

    return 0;
  }
}
