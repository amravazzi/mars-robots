import { Coordinate } from "../Coordinate";
import { Orientation } from "../Orientation";
import { Robot } from "../Robot";
import { Planet } from "../Planets/Planet";

export abstract class Command extends Robot {
  constructor(currentPlanet: Planet) {
    super(currentPlanet);
  }

  abstract exec(): Coordinate | Orientation;
}
