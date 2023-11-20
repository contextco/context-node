import { ConversationOperations } from "../operationsInterfaces";
import { ContextAPI } from "../contextAPI";
import { ConversationSeriesOptionalParams, ConversationSeriesResponse } from "../models";
/** Class containing ConversationOperations operations. */
export declare class ConversationOperationsImpl implements ConversationOperations {
    private readonly client;
    /**
     * Initialize a new instance of the class ConversationOperations class.
     * @param client Reference to the service client
     */
    constructor(client: ContextAPI);
    /**
     * Returns index of series
     * @param options The options parameters.
     */
    series(options?: ConversationSeriesOptionalParams): Promise<ConversationSeriesResponse>;
}
//# sourceMappingURL=conversationOperations.d.ts.map