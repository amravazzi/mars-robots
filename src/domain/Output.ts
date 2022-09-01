import { Coordinate } from "./Coordinate";
import { Orientation } from "./Orientation";
import { Robot } from "./Robot";

export type OutputReport = string[];

export interface formatedReport {
  position: Coordinate;
  orientation: string;
  isLost: boolean;
}
export class Output {
  private readonly robots;

  constructor(robots: Robot[]) {
    this.robots = robots;
  }

  getReport(): OutputReport {
    const robotsFormated = this.formatReport();

    let out = [];

    for (let r of robotsFormated) {
      let msg = `${r.position.x} ${r.position.y} ${r.orientation} ${
        r.isLost ? "LOST" : ""
      }`;
      out.push(msg.trimEnd());
    }

    return out;
  }

  private formatReport(): formatedReport[] {
    let robotsReport: formatedReport[] = [];

    robotsReport = this.robots.map((el) => ({
      position: el.currentCoordinate,
      orientation: Orientation[el.currentOrientation],
      isLost: el.isLost,
    }));

    return robotsReport;
  }
}
