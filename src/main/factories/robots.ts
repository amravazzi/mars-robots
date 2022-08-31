import { Coordinate } from "../../domain/Coordinate";
import { ITelemetryData } from "../../domain/Input";
import { Mars } from "../../domain/Planets/Mars";
import { Planet } from "../../domain/Planets/Planet";
import { Robot } from "../../domain/Robot";
import { MoveRobotsSwarm } from "../../usecases/move-robots-swarm";
import { StartRobots } from "../../usecases/start-robots";

export const makeRobotsSwarmMove = (telemetry: ITelemetryData): Robot[] => {
  const mars = new Mars(
    new Coordinate(telemetry.planetBoundaries[0], telemetry.planetBoundaries[1])
  );
  const robots = new StartRobots(mars, telemetry);
  const moveRobots = new MoveRobotsSwarm(robots.start(), mars);
  const movedSwarm = moveRobots.move();
  return movedSwarm;
};
