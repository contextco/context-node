import { Evaluations } from "../operationsInterfaces";
import { ContextAPI } from "../contextAPI";
import { EvaluationsRunOptionalParams, EvaluationsRunOperationResponse, EvaluationsResultOptionalParams, EvaluationsResultResponse } from "../models";
/** Class containing Evaluations operations. */
export declare class EvaluationsImpl implements Evaluations {
    private readonly client;
    /**
     * Initialize a new instance of the class Evaluations class.
     * @param client Reference to the service client
     */
    constructor(client: ContextAPI);
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