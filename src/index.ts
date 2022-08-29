import { Input } from "./domain/Input";
import { FileInput } from "./infra/FileInput";

// bootstrap
(async function () {
  const file = new FileInput("./src/telemetry.txt");
  const telemetryRaw = await file.getTelemetry();
  const input = new Input(telemetryRaw);
  const telemetry = input.getData();

  console.log({ a: telemetry.robotsProperties[2] });
})();
