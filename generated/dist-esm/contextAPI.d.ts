import * as coreClient from "@azure/core-client";
import { Log } from "./operationsInterfaces";
import { ContextAPIOptionalParams } from "./models";
export declare class ContextAPI extends coreClient.ServiceClient {
    $host: string;
    /**
     * Initializes a new instance of the ContextAPI class.
     * @param options The parameter options
     */
    constructor(options?: ContextAPIOptionalParams);
    log: Log;
}
//# sourceMappingURL=contextAPI.d.ts.map