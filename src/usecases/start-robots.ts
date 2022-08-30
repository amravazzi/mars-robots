import { Robot } from "../domain/Robot";
import { Planet } from "../domain/Planets/Planet";
import { Input, ITelemetryData } from "../domain/Input";
import { Coordinate } from "../domain/Coordinate";
import { Orientation } from "../domain/Orientation";

export class StartRobots {
  private planet;
  private telemetry;

  constructor(planet: Planet, telemetry: ITelemetryData) {
    this.planet = planet;
    this.telemetry = telemetry;
  }

  start(): Robot[] {
    const robotsProperties = this.telemetry.robotsProperties;
    const robots: Robot[] = [];

    for (let robotProperty of robotsProperties) {
      const orientation = robotProperty?.startingDirection;
      const coordinate = new Coordinate(
        robotProperty?.startingPosition[0],
        robotProperty?.startingPosition[1]
      );
      const commands = robotProperty?.commands;

      const robot = new Robot(
        this.planet,
        Orientation[Orientation[orientation]], // TODO: fix type tech debt
        coordinate,
        commands
      );

      robots.push(robot);
    }

    return robots;
  }
}
