import { Robot } from "../domain/Robot";
import { Planet } from "../domain/Planets/Planet";
import { Coordinate } from "../domain/Coordinate";
import { Orientation } from "../domain/Orientation";
import { Move } from "./move";
import { MoveForward } from "../domain/Commands/MoveForward";
import { TurnLeft } from "../domain/Commands/TurnLeft";
import { TurnRight } from "../domain/Commands/TurnRight";

export class MoveRobot implements Move {
  public robot;
  public planet;

  constructor(robot: Robot, planet: Planet) {
    this.robot = robot;
    this.planet = planet;
  }

  move(): Robot {
    const commands = this.robot.commands;
    let intermediateCoordinate: Coordinate = this.robot.currentCoordinate;
    let intermediateOrientation: Orientation = this.robot.currentOrientation;

    console.log("---------------");

    for (let comm of commands) {
      if (this.robot.isLost) break;

      switch (comm) {
        case "F":
          if (this.planet.isCoordinateScented(intermediateCoordinate)) break;
          const mf = new MoveForward(
            intermediateCoordinate,
            intermediateOrientation
          );
          intermediateCoordinate = mf.exec();
          if (this.planet.isCoordinateOutOfBoundaries(intermediateCoordinate)) {
            this.robot.isLost = true;
            this.planet.createScentedCoordinate(intermediateCoordinate);
          }
          break;

        case "L":
          const tl = new TurnLeft(intermediateOrientation);
          intermediateOrientation = tl.exec();
          break;

        case "R":
          const tr = new TurnRight(intermediateOrientation);
          intermediateOrientation = tr.exec();
          break;

        default:
          console.warn(`Command ${comm} not recognized or not available.`);
          break;
      }
    }

    this.robot.currentCoordinate = intermediateCoordinate;
    this.robot.currentOrientation = intermediateOrientation;

    console.log({ intermediateCoordinate, intermediateOrientation });

    return this.robot;
  }
}
