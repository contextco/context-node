import * as coreClient from "@azure/core-client";
import { Log, Suggested } from "./operationsInterfaces";
import { ContextAPIOptionalParams, ConversationOptionalParams, ConversationOperationResponse, ConversationsOptionalParams, ConversationsResponse } from "./models";
export declare class ContextAPI extends coreClient.ServiceClient {
    $host: string;
    /**
     * Initializes a new instance of the ContextAPI class.
     * @param options The parameter options
     */
    constructor(options?: ContextAPIOptionalParams);
    /**
     * Returns conversation details
     * @param id
     * @param options The options parameters.
     */
    conversation(id: string, options?: ConversationOptionalParams): Promise<ConversationOperationResponse>;
    /**
     * Returns list of conversations
     * @param options The options parameters.
     */
    conversations(options?: ConversationsOptionalParams): Promise<ConversationsResponse>;
    log: Log;
    suggested: Suggested;
}
//# sourceMappingURL=contextAPI.d.ts.map