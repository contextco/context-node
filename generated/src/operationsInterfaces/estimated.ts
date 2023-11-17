import { EstimatedCostOptionalParams, EstimatedCostResponse } from "../models";

/** Interface representing a Estimated. */
export interface Estimated {
  /**
   * Returns estimated cost details
   * @param options The options parameters.
   */
  cost(options?: EstimatedCostOptionalParams): Promise<EstimatedCostResponse>;
}
