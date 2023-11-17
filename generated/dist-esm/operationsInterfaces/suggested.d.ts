import { SuggestedTopicsOptionalParams, SuggestedTopicsResponse, SuggestedTopicConversationsOptionalParams, SuggestedTopicConversationsResponse, SuggestedTopicStatisticsOptionalParams, SuggestedTopicStatisticsResponse } from "../models";
/** Interface representing a Suggested. */
export interface Suggested {
    /**
     * Returns suggested topics details
     * @param options The options parameters.
     */
    topics(options?: SuggestedTopicsOptionalParams): Promise<SuggestedTopicsResponse>;
    /**
     * Returns statistics of selected topic
     * @param id
     * @param options The options parameters.
     */
    topicConversations(id: string, options?: SuggestedTopicConversationsOptionalParams): Promise<SuggestedTopicConversationsResponse>;
    /**
     * Returns a list of conversations matching given topic
     * @param id
     * @param options The options parameters.
     */
    topicStatistics(id: string, options?: SuggestedTopicStatisticsOptionalParams): Promise<SuggestedTopicStatisticsResponse>;
}
//# sourceMappingURL=suggested.d.ts.map