import { ActiveSession } from "./ActiveSession";
import { OptionsWrapper } from "./OptionsWrapper";

export class Session {
  customerName: string;
  customerId: string;
  digitalAssets: OptionsWrapper;
  operationTypes: OptionsWrapper;
  activeSessions: Array<ActiveSession>;
}
