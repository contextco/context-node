import * as coreClient from "@azure/core-client";
import { Log, Test } from "./operationsInterfaces";
import { ContextAPIOptionalParams, ConversationSeriesOptionalParams, ConversationSeriesResponse, SentimentOptionalParams, SentimentResponse, RatingOptionalParams, RatingResponse, EstimatedCostOptionalParams, EstimatedCostResponse, VolumeOptionalParams, VolumeResponse, ConversationOptionalParams, ConversationOperationResponse, ConversationsOptionalParams, ConversationsResponse, SuggestedTopicsOptionalParams, SuggestedTopicsResponse, SuggestedTopicConversationsOptionalParams, SuggestedTopicConversationsResponse, SuggestedTopicStatisticsOptionalParams, SuggestedTopicStatisticsResponse } from "./models";
export declare class ContextAPI extends coreClient.ServiceClient {
    $host: string;
    /**
     * Initializes a new instance of the ContextAPI class.
     * @param options The parameter options
     */
    constructor(options?: ContextAPIOptionalParams);
    /**
     * Returns index of series
     * @param options The options parameters.
     */
    conversationSeries(options?: ConversationSeriesOptionalParams): Promise<ConversationSeriesResponse>;
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
     * Returns estimated cost details
     * @param options The options parameters.
     */
    estimatedCost(options?: EstimatedCostOptionalParams): Promise<EstimatedCostResponse>;
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
    /**
     * Returns suggested topics details
     * @param options The options parameters.
     */
    suggestedTopics(options?: SuggestedTopicsOptionalParams): Promise<SuggestedTopicsResponse>;
    /**
     * Returns statistics of selected topic
     * @param id
     * @param options The options parameters.
     */
    suggestedTopicConversations(id: string, options?: SuggestedTopicConversationsOptionalParams): Promise<SuggestedTopicConversationsResponse>;
    /**
     * Returns a list of conversations matching given topic
     * @param id
     * @param options The options parameters.
     */
    suggestedTopicStatistics(id: string, options?: SuggestedTopicStatisticsOptionalParams): Promise<SuggestedTopicStatisticsResponse>;
    log: Log;
    test: Test;
}
//# sourceMappingURL=contextAPI.d.ts.map