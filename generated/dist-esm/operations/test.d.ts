import { Test } from "../operationsInterfaces";
import { ContextAPI } from "../contextAPI";
import { TestSetsOptionalParams, TestSetsResponse } from "../models";
/** Class containing Test operations. */
export declare class TestImpl implements Test {
    private readonly client;
    /**
     * Initialize a new instance of the class Test class.
     * @param client Reference to the service client
     */
    constructor(client: ContextAPI);
    /**
     * Returns test set and version details
     * @param options The options parameters.
     */
    sets(options?: TestSetsOptionalParams): Promise<TestSetsResponse>;
}
//# sourceMappingURL=test.d.ts.map