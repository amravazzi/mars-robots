import { OutputReport } from "../../../domain/Output";
import { IOutput } from "./IOutput";

export class ConsoleOutput implements IOutput {
  // private output;

  // constructor(output: OutputReport[]) {
  //   this.output = output;
  // }

  getOutput(output: OutputReport) {
    for (let out of output) {
      console.log(out);
    }
  }
}
