import { Suggested } from "../operationsInterfaces";
import { ContextAPI } from "../contextAPI";
import { SuggestedTopicsOptionalParams, SuggestedTopicsResponse, SuggestedTopicConversationsOptionalParams, SuggestedTopicConversationsResponse, SuggestedTopicStatisticsOptionalParams, SuggestedTopicStatisticsResponse } from "../models";
/** Class containing Suggested operations. */
export declare class SuggestedImpl implements Suggested {
    private readonly client;
    /**
     * Initialize a new instance of the class Suggested class.
     * @param client Reference to the service client
     */
    constructor(client: ContextAPI);
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