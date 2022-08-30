import { Coordinate } from "./domain/Coordinate";
import { Input } from "./domain/Input";
import { Orientation } from "./domain/Orientation";
import { Mars } from "./domain/Planets/Mars";
import { FileInput } from "./infra/FileInput";
import { StartRobots } from "./usecases/start-robots";

// bootstrap
(async function () {
  const file = new FileInput("./src/telemetry.txt");
  const telemetryRaw = await file.getTelemetry();
  const input = new Input(telemetryRaw);
  const telemetry = input.getData();

  console.log({ a: telemetry.robotsProperties[2] });

  const mars = new Mars(
    new Coordinate(telemetry.planetBoundaries[0], telemetry.planetBoundaries[1])
  );

  const robots = new StartRobots(mars, telemetry);

  console.log({ StartRobots: robots.start() });
  console.log({ telemetry });
  // console.log({ robotsProperties: telemetry.robotsProperties });
  // console.log({
  //   robotsProperties:
  //     typeof Orientation,
  // });
})();
