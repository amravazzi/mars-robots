import { Coordinate } from "../Coordinate";

export interface Planet {
  xBoundary: number | RangeError;
  yBoundary: number | RangeError;
  scentedCoordinates: Coordinate[];
  createScentedCoordinate(coordinate: Coordinate): void;
  isCoordinateScented(coordinate: Coordinate): boolean;
}
