import { describe, expect, it, beforeAll } from "@jest/globals";
import { Coordinate } from "../../src/domain/Coordinate";
import { Input } from "../../src/domain/Input";
import { Orientation } from "../../src/domain/Orientation";
import { Mars } from "../../src/domain/Planets/Mars";
import { Planet } from "../../src/domain/Planets/Planet";
import { Robot } from "../../src/domain/Robot";
import { StartRobots } from "../../src/usecases/start-robots";

describe("start robots usecase", () => {
  const telemetryRawMock = ["5 3", "1 1 E", "RFRFRFRF"];
  const robotMock = [
    new Robot(
      new Mars(new Coordinate(2, 2)),
      Orientation[Orientation.E],
      new Coordinate(1, 1),
      ["R", "F", "R", "F", "R", "F", "R", "F"]
    ),
  ];

  it("should return an array with initialized robots", () => {
    // arrange
    const coordinate: Coordinate = new Coordinate(2, 2);
    const mars: Planet = new Mars(coordinate);
    const input = new Input(telemetryRawMock);
    const telemetry = input.getData();
    const robots = new StartRobots(mars, telemetry);
    const startedRobots = robots.start();

    expect(startedRobots).toStrictEqual(robotMock);
  });
});
