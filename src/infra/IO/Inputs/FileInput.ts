import { readFile } from "node:fs/promises";
import { IInput } from "./IInput";

export class FileInput implements IInput {
  public readonly file;

  constructor(file: string) {
    this.file = file;
  }

  async getTelemetry() {
    try {
      let telemetryRaw = await readFile(this.file, "utf-8");
      const telemetry = telemetryRaw.split("\n");
      return telemetry;
    } catch (error) {
      console.log("There was an error reading telemetry file.");
    }


  }
}
