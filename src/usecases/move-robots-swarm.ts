import { Planet } from "../domain/Planets/Planet";
import { Robot } from "../domain/Robot";
import { Move } from "./move";
import { MoveRobot } from "./move-robot";

export class MoveRobotsSwarm implements Move {
  public robots;
  public planet;

  constructor(robots: Robot[], planet: Planet) {
    this.robots = robots;
    this.planet = planet;
  }

  move(): Robot[] {
    const robotsBefore = this.robots;
    const robotsAfter: Robot[] = [];

    for (let robot of robotsBefore) {
      const mr = new MoveRobot(robot, this.planet);
      const ra = mr.move();

      robotsAfter.push(ra);
    }

    return robotsAfter;
  }
}
