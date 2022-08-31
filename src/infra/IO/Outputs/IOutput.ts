import { OutputReport } from "../../../domain/Output";

export interface IOutput {
  // getOutput<T = void>(): T;
  getOutput(output: OutputReport): void;
}
