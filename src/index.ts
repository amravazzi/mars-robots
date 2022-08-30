import { Coordinate } from "./domain/Coordinate";
import { Input } from "./domain/Input";
import { Mars } from "./domain/Planets/Mars";
import { FileInput } from "./infra/FileInput";

// bootstrap
(async function () {
  const file = new FileInput("./src/telemetry.txt");
  const telemetryRaw = await file.getTelemetry();
  const input = new Input(telemetryRaw);
  const telemetry = input.getData();

  console.log({ a: telemetry.robotsProperties[2] });

  const mars = new Mars(new Coordinate(6, 5));

  console.log({ mars });
})();
