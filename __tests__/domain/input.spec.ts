import { describe, expect, it, beforeAll } from "@jest/globals";
import { Input } from "../../src/domain/Input";

describe("Input domain", () => {
  const telemetryRawMock = [
    "5 3",
    "1 1 E",
    "RFRFRFRF",
    "",
    "3 2 N",
    "FRRFLLFFRRFLL",
    "",
    "0 3 W",
    "LLFFFLFLFL",
  ];

  const telemetryMock = {
    robotsProperties: [
      {
        startingPosition: [1, 1],
        startingDirection: "E",
        commands: ["R", "F", "R", "F", "R", "F", "R", "F"],
      },
      {
        startingPosition: [3, 2],
        startingDirection: "N",
        commands: [
          "F",
          "R",
          "R",
          "F",
          "L",
          "L",
          "F",
          "F",
          "R",
          "R",
          "F",
          "L",
          "L",
        ],
      },
      {
        startingPosition: [0, 3],
        startingDirection: "W",
        commands: ["L", "L", "F", "F", "F", "L", "F", "L", "F", "L"],
      },
    ],
    planetBoundaries: [5, 3],
  };

  it("should return an object with a formated input", () => {
    const input = new Input(telemetryRawMock);
    const telemetry = input.getData();
    expect(telemetry).toStrictEqual(telemetryMock);
  });
});
