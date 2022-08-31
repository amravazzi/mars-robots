import { Coordinate } from "./domain/Coordinate";
import { Input } from "./domain/Input";
import { Orientation } from "./domain/Orientation";
import { Mars } from "./domain/Planets/Mars";
import { FileInput } from "./infra/FileInput";
import { MoveRobotsSwarm } from "./usecases/move-robots-swarm";
import { StartRobots } from "./usecases/start-robots";

// bootstrap
(async function () {
  const file = new FileInput("./src/telemetry.txt");
  const telemetryRaw = await file.getTelemetry();
  const input = new Input(telemetryRaw);
  const telemetry = input.getData();

  const mars = new Mars(
    new Coordinate(telemetry.planetBoundaries[0], telemetry.planetBoundaries[1])
  );

  const robots = new StartRobots(mars, telemetry);

  const moveRobots = new MoveRobotsSwarm(robots.start(), mars);
  const robotsAfter = moveRobots.move();
  // console.log({
  //   a: robotsAfter[2].currentCoordinate,
  //   b: Orientation[robotsAfter[2].currentOrientation],
  // });
})();
