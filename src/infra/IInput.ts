export interface IInput {
  getTelemetry(): Promise<string[] | undefined>;
}
