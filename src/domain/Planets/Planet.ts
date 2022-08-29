import { Coordinate } from "../Coordinate";

export interface Planet {
  xBoundary: number;
  yBoundary: number;
  scentedCoordinates: Coordinate[];
  createScentedCoordinate(coordinate: Coordinate): void;
  isCoordinateScented(coordinate: Coordinate): boolean;
}
