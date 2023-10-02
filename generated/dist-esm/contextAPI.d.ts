import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { Log } from "./operationsInterfaces";
import { ContextAPIOptionalParams } from "./models";
export declare class ContextAPI extends coreClient.ServiceClient {
    $host: string;
    /**
     * Initializes a new instance of the ContextAPI class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: ContextAPIOptionalParams);
    log: Log;
}
//# sourceMappingURL=contextAPI.d.ts.map