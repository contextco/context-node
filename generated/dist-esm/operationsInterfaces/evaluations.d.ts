import { EvaluationsRunOptionalParams, EvaluationsRunOperationResponse, EvaluationsResultOptionalParams, EvaluationsResultResponse } from "../models";
/** Interface representing a Evaluations. */
export interface Evaluations {
    /**
     * Submits a test run request
     * @param options The options parameters.
     */
    run(options?: EvaluationsRunOptionalParams): Promise<EvaluationsRunOperationResponse>;
    /**
     * Polls a test run for updates and results
     * @param id
     * @param options The options parameters.
     */
    result(id: string, options?: EvaluationsResultOptionalParams): Promise<EvaluationsResultResponse>;
}
//# sourceMappingURL=evaluations.d.ts.map