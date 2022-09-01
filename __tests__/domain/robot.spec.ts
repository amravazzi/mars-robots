import { describe, expect, it, beforeAll } from "@jest/globals";
import { Coordinate } from "../../src/domain/Coordinate";
import { Orientation } from "../../src/domain/Orientation";
import { Mars } from "../../src/domain/Planets/Mars";
import { Planet } from "../../src/domain/Planets/Planet";
import { Robot } from "../../src/domain/Robot";

describe("Robot domain", () => {
  it("should not move if the coordinate is scented", () => {
    // arrange
    const coordinate: Coordinate = new Coordinate(1, 1);
    const nextCoordinate: Coordinate = new Coordinate(2, 2);
    const mars: Planet = new Mars(coordinate);
    const orientation: Orientation = Orientation.N;
    const commands = ["L", "L", "F", "F", "F", "L", "F", "L", "F", "L"];

    // act
    mars.createScentedCoordinate(nextCoordinate);
    const robot = new Robot(mars, orientation, coordinate, commands);
    const shouldMoveFwd = robot.shouldMoveForward(nextCoordinate);

    // assert
    expect(shouldMoveFwd).toBe(false);
  });
});
