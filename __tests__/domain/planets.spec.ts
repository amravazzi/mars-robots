import { describe, expect, it, beforeAll } from "@jest/globals";
import { Coordinate } from "../../src/domain/Coordinate";
import { Mars } from "../../src/domain/Planets/Mars";
import { Planet } from "../../src/domain/Planets/Planet";

describe("Planet, Mars domain", () => {
  beforeAll(() => {});

  it("should throw if the X boundary coordinate exceeds 50", () => {
    // arrange
    const coordinate: Coordinate = new Coordinate(100, 1);

    // act
    const mars: Planet = new Mars(coordinate);

    // asset
    expect(mars.xBoundary).toStrictEqual(
      new RangeError("X boundary should be between 1 and 50")
    );
  });

  it("should throw if the Y boundary coordinate exceeds 50", () => {
    const coordinate: Coordinate = new Coordinate(1, 100);
    const mars: Planet = new Mars(coordinate);
    expect(mars.yBoundary).toStrictEqual(
      new RangeError("Y boundary should be between 1 and 50")
    );
  });
});
