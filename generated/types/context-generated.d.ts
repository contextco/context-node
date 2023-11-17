import * as coreClient from '@azure/core-client';

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

/** Interface representing a ConversationOperations. */
export declare interface ConversationOperations {
    /**
     * Returns index of series
     * @param options The options parameters.
     */
    series(options?: ConversationSeriesOptionalParams): Promise<ConversationSeriesResponse>;
}

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
export declare interface ConversationSeriesOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
}

/** Contains response data for the series operation. */
export declare type ConversationSeriesResponse = PathsPixtmzApiV1ConversationsSeriesGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface ConversationsOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    /** Limits returned conversations to those that occurred after given time.<br />Must be ISO 8601. Defaults to the beginning of 6 days ago.<br /> */
    startTime?: string;
    /** Limits returned conversations to those that occurred before given time.<br />Must be ISO 8601. Defaults to now.<br /> */
    endTime?: string;
    /** Page number of results to return. Defaults to 1.<br /> */
    page?: number;
    /** Number of results to return per page. Defaults to 20.<br /> */
    perPage?: number;
    /** Filter by tenant id.<br /> */
    tenantId?: number;
}

/** Contains response data for the conversations operation. */
export declare type ConversationsResponse = PathsY5Azv9ApiV1ConversationsGetResponses200ContentApplicationJsonSchema;

/** Interface representing a Estimated. */
export declare interface Estimated {
    /**
     * Returns estimated cost details
     * @param options The options parameters.
     */
    cost(options?: EstimatedCostOptionalParams): Promise<EstimatedCostResponse>;
}

/** Optional parameters. */
export declare interface EstimatedCostOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    /** Filter by tenant id.<br /> */
    tenantId?: string;
    /** Limits scope to data that occurred after given time.<br />Must be ISO 8601. Defaults to the beginning of 6 days ago.<br /> */
    startTime?: string;
    /** Limits scope to data that occurred before given time.<br />Must be ISO 8601. Defaults to now.<br /> */
    endTime?: string;
    /** Period to group data by. Defaults to day. Options are: day, week, month.<br /> */
    period?: string;
}

/** Contains response data for the cost operation. */
export declare type EstimatedCostResponse = Paths1J9XfjaApiV1ConversationsSeriesEstimatedCostGetResponses200ContentApplicationJsonSchema;

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
    /**
     * Ingests or updates a thread
     * @param options The options parameters.
     */
    conversationThread(options?: LogConversationThreadOptionalParams): Promise<LogConversationThreadResponse>;
}

/** Optional parameters. */
export declare interface LogConversationOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    body?: PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema;
}

/** Optional parameters. */
export declare interface LogConversationThreadOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    body?: Paths1S2Rf6XApiV1LogConversationThreadPostRequestbodyContentApplicationJsonSchema;
}

/** Contains response data for the conversationThread operation. */
export declare type LogConversationThreadResponse = PathsDo7Pm8ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchema;

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

export declare interface Pagination {
    totalRecords: number;
    perPage: number;
    currentPage: number;
    previousPage: number | null;
    nextPage: number | null;
    pageCount: number;
}

export declare interface Paths11Gsqt2ApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchema {
    topic: Topic;
    statistics: Paths1MjxjdtApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchemaPropertiesStatistics;
}

export declare interface Paths1AqjttjApiV1ConversationsSeriesSentimentGetResponses200ContentApplicationJsonSchema {
    series: SeriesItem[];
    type: string;
    period: string;
    startTime: string;
    endTime: string;
}

export declare interface Paths1J9XfjaApiV1ConversationsSeriesEstimatedCostGetResponses200ContentApplicationJsonSchema {
    series: SeriesItem[];
    type: string;
    period: string;
    startTime: string;
    endTime: string;
}

export declare interface Paths1MjxjdtApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchemaPropertiesStatistics {
    conversationCount: number;
    userMessageCount: number;
    assistantMessageCount: number;
    meanSentiment: number;
    meanUserRating: number;
}

export declare interface Paths1O34Sy5ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchemaPropertiesData {
    id?: string;
}

export declare interface Paths1Ola7DlApiV1ConversationsSeriesVolumeGetResponses200ContentApplicationJsonSchema {
    series: SeriesItem[];
    type: string;
    period: string;
    startTime: string;
    endTime: string;
}

export declare interface Paths1S2Rf6XApiV1LogConversationThreadPostRequestbodyContentApplicationJsonSchema {
    conversation?: Thread;
}

export declare interface Paths1TzwckqApiV1TopicSuggestionsIdConversationsGetResponses200ContentApplicationJsonSchema {
    conversations: ConversationResponse[];
    pagination: Pagination;
}

export declare interface Paths1U893W0ApiV1TopicSuggestionsGetResponses200ContentApplicationJsonSchema {
    topics: TopicWithSamples[];
    pagination: Pagination;
}

export declare interface PathsDo7Pm8ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchema {
    status?: string;
    data?: Paths1O34Sy5ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchemaPropertiesData;
}

export declare interface PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema {
    conversation?: Conversation;
}

export declare interface PathsPixtmzApiV1ConversationsSeriesGetResponses200ContentApplicationJsonSchema {
    available: string[];
}

export declare interface PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchema {
    conversation?: Conversation;
}

export declare interface PathsXq2NqjApiV1ConversationsSeriesRatingGetResponses200ContentApplicationJsonSchema {
    series: SeriesItem[];
    type: string;
    period: string;
    startTime: string;
    endTime: string;
}

export declare interface PathsY5Azv9ApiV1ConversationsGetResponses200ContentApplicationJsonSchema {
    conversations: ConversationResponse[];
    pagination: Pagination;
}

/** Defines values for Rating. */
export declare type Rating = -1 | 0 | 1;

/** Optional parameters. */
export declare interface RatingOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    /** Filter by tenant id.<br /> */
    tenantId?: string;
    /** Limits scope to data that occurred after given time.<br />Must be ISO 8601. Defaults to the beginning of 6 days ago.<br /> */
    startTime?: string;
    /** Limits scope to data that occurred before given time.<br />Must be ISO 8601. Defaults to now.<br /> */
    endTime?: string;
    /** Period to group data by. Defaults to day. Options are: day, week, month.<br /> */
    period?: string;
}

/** Contains response data for the rating operation. */
export declare type RatingResponse = PathsXq2NqjApiV1ConversationsSeriesRatingGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface SentimentOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    /** Filter by tenant id.<br /> */
    tenantId?: string;
    /** Limits scope to data that occurred after given time.<br />Must be ISO 8601. Defaults to the beginning of 6 days ago.<br /> */
    startTime?: string;
    /** Limits scope to data that occurred before given time.<br />Must be ISO 8601. Defaults to now.<br /> */
    endTime?: string;
    /** Period to group data by. Defaults to day. Options are: day, week, month.<br /> */
    period?: string;
}

/** Contains response data for the sentiment operation. */
export declare type SentimentResponse = Paths1AqjttjApiV1ConversationsSeriesSentimentGetResponses200ContentApplicationJsonSchema;

export declare interface SeriesItem {
    name: string;
    /** Dictionary of <number> */
    data: {
        [propertyName: string]: number | null;
    };
}

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
    /** Page number of results to return. Defaults to 1.<br /> */
    page?: number;
    /** Number of results to return per page. Defaults to 20.<br /> */
    perPage?: number;
}

/** Contains response data for the topics operation. */
export declare type SuggestedTopicsResponse = Paths1U893W0ApiV1TopicSuggestionsGetResponses200ContentApplicationJsonSchema;

/** Optional parameters. */
export declare interface SuggestedTopicStatisticsOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    /** Limits returned conversations to those that occurred after given time.<br />Must be ISO 8601. Defaults to the beginning of 6 days ago.<br /> */
    startTime?: string;
    /** Limits returned conversations to those that occurred before given time.<br />Must be ISO 8601. Defaults to now.<br /> */
    endTime?: string;
    /** Page number of results to return. Defaults to 1.<br /> */
    page?: number;
    /** Number of results to return per page. Defaults to 20.<br /> */
    perPage?: number;
}

/** Contains response data for the topicStatistics operation. */
export declare type SuggestedTopicStatisticsResponse = Paths1TzwckqApiV1TopicSuggestionsIdConversationsGetResponses200ContentApplicationJsonSchema;

export declare interface Thread {
    id?: string;
    messages: Message[];
    /** Dictionary of <string> */
    metadata?: {
        [propertyName: string]: string;
    };
}

export declare interface Topic {
    id: string;
    name: string;
}

export declare interface TopicWithSamples {
    id: string;
    name: string;
    conversationsSample: ConversationResponse[];
}

/** Optional parameters. */
export declare interface VolumeOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    /** Filter by tenant id.<br /> */
    tenantId?: string;
    /** Limits scope to data that occurred after given time.<br />Must be ISO 8601. Defaults to the beginning of 6 days ago.<br /> */
    startTime?: string;
    /** Limits scope to data that occurred before given time.<br />Must be ISO 8601. Defaults to now.<br /> */
    endTime?: string;
    /** Period to group data by. Defaults to day. Options are: day, week, month.<br /> */
    period?: string;
}

/** Contains response data for the volume operation. */
export declare type VolumeResponse = Paths1Ola7DlApiV1ConversationsSeriesVolumeGetResponses200ContentApplicationJsonSchema;

export { }
