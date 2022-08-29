import { readFile } from "node:fs/promises";

interface IFileSystem {
  file: string;
  getData(): void;
}

export class FileSystem implements IFileSystem {
  public readonly file;

  constructor(file: string) {
    this.file = file;
  }

  private async getTelemetry() {
    let telemetryRaw: string | undefined = "";

    try {
      telemetryRaw = await readFile(this.file, "utf-8");
    } catch (error) {
      console.log("There was an error reading telemetry file.");
    }

    const telemetry = telemetryRaw.split("\n");
    console.log({ telemetry });
    return telemetry;
  }

  async getData() {
    const [marsBoundaries, ...robotsRaw] = await this.getTelemetry();

    const robotsProperties = robotsRaw
      .map((el, i) => {
        if (!el) {
          const [startingPosX, startingPosY, startingDir] =
            robotsRaw[i - 2].split(" ");
          return {
            startingPos: [startingPosX, startingPosY],
            startingDir,
            commands: robotsRaw[i - 1].split(""),
          };
        }
        if (robotsRaw.length - 1 === i) {
          const [startingPosX, startingPosY, startingDir] =
            robotsRaw[i - 1].split(" ");
          return {
            startingPos: [startingPosX, startingPosY],
            startingDir,
            commands: robotsRaw[i].split(""),
          };
        }
      })
      .filter((el) => el);

    console.log(robotsProperties[0]);

    return {
      robotsProperties,
      marsBoundaries: marsBoundaries.split(" "),
    };
  }
}

// interface ICoordinate {
//   x: string;
//   y: string;
//   // z?: string;
// }

// export type Coordinate = [string, string];

// enum Orientation {
//   N = "N",
//   // NE = "NE",
//   E = "E",
//   S = "S",
//   W = "W",
// }

// enum Orientation {
//   N,
//   // NE,
//   E,
//   S,
//   W,
// }

enum Orientation {
  N = 0,
  // NE = 45,
  E = 90,
  S = 180,
  W = 270,
}

// const a: Orientation = Orientation[Orientation["E"]];
const a: Orientation = Orientation["E"];

// console.log(Orientation[Orientation["N"] + 90]);
// console.log(Orientation[Orientation["N"]]);
// console.log(Orientation["N"]);

export class Coordinate {
  x: string;
  y: string;

  constructor(x: string, y: string) {
    this.x = x;
    this.y = y;
  }
}

// type Coordinate2 = [string, string];

interface Planet {
  xBoundary: string;
  yBoundary: string;
  scentedCoordinates: Coordinate[];
  createScentedCoordinate(coordinate: Coordinate): void;
  isCoordinateScented(coordinate: Coordinate): boolean;
}

//    N
// W     E
//    S
export class Mars implements Planet {
  xBoundary: string;
  yBoundary: string;
  scentedCoordinates: Coordinate[];

  constructor(coordinate: Coordinate) {
    this.xBoundary = coordinate.x;
    this.yBoundary = coordinate.y;
    this.scentedCoordinates = [];
  }

  createScentedCoordinate(coordinate: Coordinate): void {
    this.scentedCoordinates.push(coordinate);
  }

  isCoordinateScented(coordinate: Coordinate): boolean {
    return this.scentedCoordinates.includes(coordinate);
  }
}

// bootstrap
(async function () {
  const file = new FileSystem("./src/telemetry.txt");
  const telemetryData = await file.getData();

  console.log({ telemetryData });
})();
