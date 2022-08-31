import { Input, ITelemetryData } from "../../domain/Input";
import { FileInput } from "../../infra/IO/Inputs/FileInput";

export const makeTelemetry = async (): Promise<ITelemetryData> => {
  const file = new FileInput("./src/telemetry.txt");
  const telemetryRaw = await file.getTelemetry();
  const input = new Input(telemetryRaw);
  const telemetry = input.getData();

  return telemetry;
};
