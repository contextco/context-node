import { Estimated } from "../operationsInterfaces";
import { ContextAPI } from "../contextAPI";
import { EstimatedCostOptionalParams, EstimatedCostResponse } from "../models";
/** Class containing Estimated operations. */
export declare class EstimatedImpl implements Estimated {
    private readonly client;
    /**
     * Initialize a new instance of the class Estimated class.
     * @param client Reference to the service client
     */
    constructor(client: ContextAPI);
    /**
     * Returns estimated cost details
     * @param options The options parameters.
     */
    cost(options?: EstimatedCostOptionalParams): Promise<EstimatedCostResponse>;
}
//# sourceMappingURL=estimated.d.ts.map