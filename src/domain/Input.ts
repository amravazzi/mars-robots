import { Coordinate } from "./Coordinate";
import { Orientation } from "./Orientation";
import { AvailableCommands } from "./Commands/AvailableCommands";

// this is for only 1 robot...
// export interface IRobotTelemetry {
//   // startingPosition: Coordinate;
//   startingPosition: number[];
//   startingDirection: string;
//   // commands: AvailableCommands;
//   commands: string[];
// }

// export interface ITelemetryData {
//   robotsProperties: IRobotTelemetry[];
//   planetBoundaries: number[];
// }

export class Input {
  public readonly telemetry;

  constructor(telemetry: string[]) {
    this.telemetry = telemetry;
  }

  getData() {
    const [marsBoundaries, ...robotsRaw] = this.telemetry;

    const robotsProperties = robotsRaw
      .map((el, i) => {
        if (!el) {
          const [startingPosX, startingPosY, startingDirection] =
            robotsRaw[i - 2].split(" ");
          return {
            startingPosition: [parseInt(startingPosX), parseInt(startingPosY)],
            startingDirection,
            commands: robotsRaw[i - 1].split(""),
          };
        }
        if (robotsRaw.length - 1 === i) {
          const [startingPosX, startingPosY, startingDirection] =
            robotsRaw[i - 1].split(" ");
          return {
            startingPosition: [parseInt(startingPosX), parseInt(startingPosY)],
            startingDirection,
            commands: robotsRaw[i].split(""),
          };
        }
      })
      .filter((el) => el);

    console.log({ robotsProperties: robotsProperties[0] });

    return {
      robotsProperties,
      planetBoundaries: [
        parseInt(marsBoundaries.split(" ")[0]),
        parseInt(marsBoundaries.split(" ")[1])
      ],
    };
  }
}
