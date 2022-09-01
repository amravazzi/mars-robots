import { describe, expect, it, beforeAll } from "@jest/globals";
import { Coordinate } from "../../src/domain/Coordinate";
import { Orientation } from "../../src/domain/Orientation";
import { Mars } from "../../src/domain/Planets/Mars";
import { Planet } from "../../src/domain/Planets/Planet";
import { Robot } from "../../src/domain/Robot";
import { MoveRobot } from "../../src/usecases/move-robot";

describe("move robot usecase", () => {
  it("should move one robot and return updated positions and orientations", () => {
    // arrange
    const coordinate: Coordinate = new Coordinate(2, 2);
    const mars: Planet = new Mars(coordinate);
    const robotMock = new Robot(mars, Orientation[Orientation.E], coordinate, [
      "R",
      "F",
      "R",
      "F",
      "R",
      "F",
      "R",
      "F",
    ]);

    // act
    const moveRobotInstance = new MoveRobot(robotMock, mars);
    const movedRobot = moveRobotInstance.move();

    // assert
    expect(movedRobot.currentOrientation).toBe(Orientation.E);
    expect(movedRobot.currentCoordinate).toStrictEqual(new Coordinate(2, 2));
    expect(movedRobot.isLost).toBe(false);
  });
});
