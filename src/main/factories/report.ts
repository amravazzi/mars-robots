import { Output } from "../../domain/Output";
import { Robot } from "../../domain/Robot";
import { IOutput } from "../../infra/IO/Outputs/IOutput";

export const makeRobotsReport = (robots: Robot[], printer: IOutput): void => {
  const output = new Output(robots);
  const robotReport = output.getReport();
  printer.getOutput(robotReport);
};
