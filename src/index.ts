import { makeRobotsSwarmMove } from "./main/factories/robots";
import { makeTelemetry } from "./main/factories/telemetry";
import { ConsoleOutput } from "./infra/IO/Outputs/ConsoleOutput";
import { makeRobotsReport } from "./main/factories/report";

// bootstrap
(async function () {
  const telemetry = await makeTelemetry();
  const movedSwarm = makeRobotsSwarmMove(telemetry);
  const printer = new ConsoleOutput();
  makeRobotsReport(movedSwarm, printer);
})();
