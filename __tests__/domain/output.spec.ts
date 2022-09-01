import { describe, expect, it, beforeAll } from "@jest/globals";
import { Coordinate } from "../../src/domain/Coordinate";
import { Orientation } from "../../src/domain/Orientation";
import { Mars } from "../../src/domain/Planets/Mars";
import { Planet } from "../../src/domain/Planets/Planet";
import { Robot } from "../../src/domain/Robot";
import { Output } from "../../src/domain/Output";

describe("Output domain", () => {
  const coordinate: Coordinate = new Coordinate(3, 2);
  const mars: Planet = new Mars(coordinate);
  const orientation: Orientation = Orientation.N;
  const commands = [
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
  ];
  const robot = new Robot(mars, orientation, coordinate, commands);

  it("should return an array with a formated output/report", () => {
    const output = new Output([robot]);
    const report = output.getReport();
    expect(report).toStrictEqual(["3 2 N"]);
  });
});
