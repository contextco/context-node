import { TestSetsOptionalParams, TestSetsResponse } from "../models";

/** Interface representing a Test. */
export interface Test {
  /**
   * Returns test set and version details
   * @param options The options parameters.
   */
  sets(options?: TestSetsOptionalParams): Promise<TestSetsResponse>;
}
