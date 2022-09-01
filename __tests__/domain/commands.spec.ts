import { describe, expect, it, beforeAll } from "@jest/globals";
import { MoveForward } from "../../src/domain/Commands/MoveForward";
import { TurnLeft } from "../../src/domain/Commands/TurnLeft";
import { TurnRight } from "../../src/domain/Commands/TurnRight";
import { Coordinate } from "../../src/domain/Coordinate";
import { Orientation } from "../../src/domain/Orientation";

describe("Command domain", () => {
  const coordinate: Coordinate = new Coordinate(1, 1);
  const orientation: Orientation = Orientation.N;

  it("should move forward", () => {
    // arrange
    const newCoord = new MoveForward(coordinate, orientation);

    // act
    const nextPos = newCoord.exec();

    // assert
    expect(nextPos.x).toBe(1);
    expect(nextPos.y).toBe(2);
  });

  it("should turn left", () => {
    const newDirection = new TurnLeft(orientation);
    const nextPos = newDirection.exec();
    expect(nextPos).toBe(Orientation.W);
  });

  it("should turn right", () => {
    const newDirection = new TurnRight(orientation);
    const nextPos = newDirection.exec();
    expect(nextPos).toBe(Orientation.E);
  });
});
