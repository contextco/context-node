import * as coreClient from "@azure/core-client";
import { ConversationOperations, Estimated, Log, Suggested } from "./operationsInterfaces";
import { ContextAPIOptionalParams, SentimentOptionalParams, SentimentResponse, RatingOptionalParams, RatingResponse, VolumeOptionalParams, VolumeResponse, ConversationOptionalParams, ConversationOperationResponse, ConversationsOptionalParams, ConversationsResponse } from "./models";
export declare class ContextAPI extends coreClient.ServiceClient {
    $host: string;
    /**
     * Initializes a new instance of the ContextAPI class.
     * @param options The parameter options
     */
    constructor(options?: ContextAPIOptionalParams);
    /**
     * Returns sentiment details
     * @param options The options parameters.
     */
    sentiment(options?: SentimentOptionalParams): Promise<SentimentResponse>;
    /**
     * Returns rating details
     * @param options The options parameters.
     */
    rating(options?: RatingOptionalParams): Promise<RatingResponse>;
    /**
     * Returns volume details
     * @param options The options parameters.
     */
    volume(options?: VolumeOptionalParams): Promise<VolumeResponse>;
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
    conversationOperations: ConversationOperations;
    estimated: Estimated;
    log: Log;
    suggested: Suggested;
}
//# sourceMappingURL=contextAPI.d.ts.map