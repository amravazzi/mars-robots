import { Coordinate } from "../Coordinate";
import { Orientation } from "../Orientation";

export abstract class Command {
  abstract exec(): Coordinate | Orientation;
}
