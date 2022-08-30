// export type Coordinate = [string, string];
export class Coordinate {
  x: number | undefined;
  y: number | undefined;

  constructor(x: number | undefined, y: number | undefined) {
    this.x = typeof x === undefined ? 0 : x;
    this.y = typeof y === undefined ? 0 : y;
  }
}
