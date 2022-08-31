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
    console.log("starting ", {
      startingCoord: intermediateCoordinate,
      startingOrient: intermediateOrientation,
    });

    for (let comm of commands) {
      if (this.robot.isLost) break;

      console.log({ comm });

      switch (comm) {
        case "F":
          const nextPosition = new MoveForward(
            intermediateCoordinate,
            intermediateOrientation
          );
          const nextPositionCoord = nextPosition.exec();

          // is the current coordinate (intermediateCoordinate) scented?
          if (this.planet.isCoordinateScented(intermediateCoordinate)) {
            // is the next coordinate (nextPositionCoord) out of boundaries?
            if (this.planet.isCoordinateOutOfBoundaries(nextPositionCoord)) {
              // current is scented and next is OOB: don't move
              break;
            }
            // current is scented and next is NOT OOB: moves the robot
            intermediateCoordinate = nextPositionCoord;
            break;
          } else {
            // is the next coordinate (nextPositionCoord) out of boundaries?
            if (this.planet.isCoordinateOutOfBoundaries(nextPositionCoord)) {
              // the robot is lost now
              this.robot.isLost = true;
              // and a new scented coordinate is created
              this.planet.createScentedCoordinate(intermediateCoordinate);
              break;
            }
            // otherwise, move the robot
            intermediateCoordinate = nextPositionCoord;
            break;
          }

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

    console.log({
      intermediateCoordinate,
      intermediateOrientation,
      isLost: this.robot.isLost,
      scentedCoordinates: this.robot.planet.scentedCoordinates,
    });

    return this.robot;
  }
}
