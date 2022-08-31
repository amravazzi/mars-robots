import { Coordinate } from "../Coordinate";

export interface Planet {
  xBoundary: number | RangeError | undefined;
  yBoundary: number | RangeError | undefined;
  scentedCoordinates: Coordinate[];
  createScentedCoordinate(coordinate: Coordinate): void;
  isCoordinateScented(coordinate: Coordinate): boolean;
  isCoordinateOutOfBoundaries(coordinate: Coordinate): boolean;
}
