import * as coreClient from '@azure/core-client';

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

/** Optional parameters. */
export declare interface ContextAPIOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

export declare interface Conversation {
    messages?: Message[];
    /** Dictionary of <string> */
    metadata?: {
        [propertyName: string]: string;
    };
}

/** Contains response data for the conversation operation. */
export declare type ConversationOperationResponse = ConversationResponse;

/** Optional parameters. */
export declare interface ConversationOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
}

export declare interface ConversationResponse {
    id: string;
    /** Dictionary of <string> */
    metadata: {
        [propertyName: string]: string;
    };
    sentimentTrend: ConversationSentimentTrend;
    topics: Topic[];
    suggestedTopics: Topic[];
    messages: MessageResponse[];
}

/**
 * Defines values for ConversationSentimentTrend. \
 * {@link KnownConversationSentimentTrend} can be used interchangeably with ConversationSentimentTrend,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **up** \
 * **flat** \
 * **down**
 */
export declare type ConversationSentimentTrend = string;

/** Optional parameters. */
export declare interface ConversationsOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    /** Limits returned conversations to those that occurred after given time.<br />Must be ISO 8601. Defaults to the beginning of 6 days ago.<br /> */
    startTime?: string;
    /** Limits returned conversations to those that occurred before given time.<br />Must be ISO 8601. Defaults to now.<br /> */
    endTime?: string;
}

/** Contains response data for the conversations operation. */
export declare type ConversationsResponse = PathsY5Azv9ApiV1ConversationsGetResponses200ContentApplicationJsonSchema;

/** Known values of {@link ConversationSentimentTrend} that the service accepts. */
export declare enum KnownConversationSentimentTrend {
    /** Up */
    Up = "up",
    /** Flat */
    Flat = "flat",
    /** Down */
    Down = "down"
}

/** Known values of {@link MessageParamsRole} that the service accepts. */
export declare enum KnownMessageParamsRole {
    /** System */
    System = "system",
    /** Assistant */
    Assistant = "assistant",
    /** User */
    User = "user"
}

/** Known values of {@link MessageParamsType} that the service accepts. */
export declare enum KnownMessageParamsType {
    /** Message */
    Message = "message",
    /** Tool */
    Tool = "tool"
}

/** Known values of {@link MessageRole} that the service accepts. */
export declare enum KnownMessageRole {
    /** System */
    System = "system",
    /** Assistant */
    Assistant = "assistant",
    /** User */
    User = "user"
}

/** Known values of {@link MessageType} that the service accepts. */
export declare enum KnownMessageType {
    /** Message */
    Message = "message",
    /** Tool */
    Tool = "tool"
}

/** Interface representing a Log. */
export declare interface Log {
    /**
     * Ingests a conversation
     * @param options The options parameters.
     */
    conversation(options?: LogConversationOptionalParams): Promise<void>;
    /**
     * Ingests or updates conversation
     * @param options The options parameters.
     */
    conversationUpsert(options?: LogConversationUpsertOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface LogConversationOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    body?: PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema;
}

/** Optional parameters. */
export declare interface LogConversationUpsertOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    body?: PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchema;
}

export declare interface Message {
    role?: MessageParamsRole;
    message?: string;
    type?: MessageParamsType;
    eventTimestamp?: Date;
    /** Dictionary of <string> */
    metadata?: {
        [propertyName: string]: string;
    };
    rating?: Rating;
    name?: string;
    thought?: string;
    /** Any object */
    input?: Record<string, unknown>;
    observation?: string;
}

/**
 * Defines values for MessageParamsRole. \
 * {@link KnownMessageParamsRole} can be used interchangeably with MessageParamsRole,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **system** \
 * **assistant** \
 * **user**
 */
export declare type MessageParamsRole = string;

/**
 * Defines values for MessageParamsType. \
 * {@link KnownMessageParamsType} can be used interchangeably with MessageParamsType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **message** \
 * **tool**
 */
export declare type MessageParamsType = string;

export declare interface MessageResponse {
    type?: MessageType;
    eventTimestamp?: Date;
    role: MessageRole;
    message: string;
    rating: Rating;
    language: string;
    translation?: string;
    sentiment: number;
    topics: Topic[];
    suggestedTopics?: Topic[];
    /** Dictionary of <string> */
    metadata?: {
        [propertyName: string]: string;
    };
}

/**
 * Defines values for MessageRole. \
 * {@link KnownMessageRole} can be used interchangeably with MessageRole,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **system** \
 * **assistant** \
 * **user**
 */
export declare type MessageRole = string;

/**
 * Defines values for MessageType. \
 * {@link KnownMessageType} can be used interchangeably with MessageType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **message** \
 * **tool**
 */
export declare type MessageType = string;

export declare interface Paths11Gsqt2ApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchema {
    topic: Topic;
    statistics: Paths1MjxjdtApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchemaPropertiesStatistics;
}

export declare interface Paths1MjxjdtApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchemaPropertiesStatistics {
    conversationCount: number;
    userMessageCount: number;
    assistantMessageCount: number;
    meanSentiment: number;
    meanUserRating: number;
}

export declare interface Paths1TzwckqApiV1TopicSuggestionsIdConversationsGetResponses200ContentApplicationJsonSchema {
    count: number;
    conversations: ConversationResponse[];
}

export declare interface Paths1U893W0ApiV1TopicSuggestionsGetResponses200ContentApplicationJsonSchema {
    count: number;
    topics: TopicWithSamples[];
}

export declare interface PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema {
    conversation?: Conversation;
}

export declare interface PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchema {
    conversation?: Conversation;
}

export declare interface PathsY5Azv9ApiV1ConversationsGetResponses200ContentApplicationJsonSchema {
    count: number;
    conversations: ConversationResponse[];
}

/** Defines values for Rating. */
export declare type Rating = -1 | 0 | 1;

/** Interface representing a Suggested. */
export declare interface Suggested {
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

/** Optional parameters. */
export declare interface SuggestedTopicConversationsOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
}

/** Contains response data for the topicConversations operation. */
export declare type SuggestedTopicConversationsResponse = Paths11Gsqt2ApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface SuggestedTopicsOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
}

/** Contains response data for the topics operation. */
export declare type SuggestedTopicsResponse = Paths1U893W0ApiV1TopicSuggestionsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface SuggestedTopicStatisticsOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
}

/** Contains response data for the topicStatistics operation. */
export declare type SuggestedTopicStatisticsResponse = Paths1TzwckqApiV1TopicSuggestionsIdConversationsGetResponses200ContentApplicationJsonSchema;

export declare interface Topic {
    id: string;
    name: string;
}

export declare interface TopicWithSamples {
    id: string;
    name: string;
    conversationsSample: ConversationResponse[];
}

export { }
