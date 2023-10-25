import * as coreClient from "@azure/core-client";
export interface ConversationResponse {
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
export interface Topic {
    id: string;
    name: string;
}
export interface MessageResponse {
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
export interface PathsY5Azv9ApiV1ConversationsGetResponses200ContentApplicationJsonSchema {
    count: number;
    conversations: ConversationResponse[];
}
export interface PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema {
    conversation?: Conversation;
}
export interface Conversation {
    messages?: Message[];
    /** Dictionary of <string> */
    metadata?: {
        [propertyName: string]: string;
    };
}
export interface Message {
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
export interface PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchema {
    conversation?: Conversation;
}
export interface Paths1U893W0ApiV1TopicSuggestionsGetResponses200ContentApplicationJsonSchema {
    count: number;
    topics: TopicWithSamples[];
}
export interface TopicWithSamples {
    id: string;
    name: string;
    conversationsSample: ConversationResponse[];
}
export interface Paths11Gsqt2ApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchema {
    topic: Topic;
    statistics: Paths1MjxjdtApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchemaPropertiesStatistics;
}
export interface Paths1MjxjdtApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchemaPropertiesStatistics {
    conversationCount: number;
    userMessageCount: number;
    assistantMessageCount: number;
    meanSentiment: number;
    meanUserRating: number;
}
export interface Paths1TzwckqApiV1TopicSuggestionsIdConversationsGetResponses200ContentApplicationJsonSchema {
    count: number;
    conversations: ConversationResponse[];
}
/** Known values of {@link ConversationSentimentTrend} that the service accepts. */
export declare enum KnownConversationSentimentTrend {
    /** Up */
    Up = "up",
    /** Flat */
    Flat = "flat",
    /** Down */
    Down = "down"
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
export type ConversationSentimentTrend = string;
/** Known values of {@link MessageType} that the service accepts. */
export declare enum KnownMessageType {
    /** Message */
    Message = "message",
    /** Tool */
    Tool = "tool"
}
/**
 * Defines values for MessageType. \
 * {@link KnownMessageType} can be used interchangeably with MessageType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **message** \
 * **tool**
 */
export type MessageType = string;
/** Known values of {@link MessageRole} that the service accepts. */
export declare enum KnownMessageRole {
    /** System */
    System = "system",
    /** Assistant */
    Assistant = "assistant",
    /** User */
    User = "user"
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
export type MessageRole = string;
/** Known values of {@link MessageParamsRole} that the service accepts. */
export declare enum KnownMessageParamsRole {
    /** System */
    System = "system",
    /** Assistant */
    Assistant = "assistant",
    /** User */
    User = "user"
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
export type MessageParamsRole = string;
/** Known values of {@link MessageParamsType} that the service accepts. */
export declare enum KnownMessageParamsType {
    /** Message */
    Message = "message",
    /** Tool */
    Tool = "tool"
}
/**
 * Defines values for MessageParamsType. \
 * {@link KnownMessageParamsType} can be used interchangeably with MessageParamsType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **message** \
 * **tool**
 */
export type MessageParamsType = string;
/** Defines values for Rating. */
export type Rating = -1 | 0 | 1;
/** Optional parameters. */
export interface ConversationOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
}
/** Contains response data for the conversation operation. */
export type ConversationOperationResponse = ConversationResponse;
/** Optional parameters. */
export interface ConversationsOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    /** Limits returned conversations to those that occurred after given time.<br />Must be ISO 8601. Defaults to the beginning of 6 days ago.<br /> */
    startTime?: string;
    /** Limits returned conversations to those that occurred before given time.<br />Must be ISO 8601. Defaults to now.<br /> */
    endTime?: string;
}
/** Contains response data for the conversations operation. */
export type ConversationsResponse = PathsY5Azv9ApiV1ConversationsGetResponses200ContentApplicationJsonSchema;
/** Optional parameters. */
export interface LogConversationOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    body?: PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema;
}
/** Optional parameters. */
export interface LogConversationUpsertOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    body?: PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchema;
}
/** Optional parameters. */
export interface SuggestedTopicsOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
}
/** Contains response data for the topics operation. */
export type SuggestedTopicsResponse = Paths1U893W0ApiV1TopicSuggestionsGetResponses200ContentApplicationJsonSchema;
/** Optional parameters. */
export interface SuggestedTopicConversationsOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
}
/** Contains response data for the topicConversations operation. */
export type SuggestedTopicConversationsResponse = Paths11Gsqt2ApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchema;
/** Optional parameters. */
export interface SuggestedTopicStatisticsOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
}
/** Contains response data for the topicStatistics operation. */
export type SuggestedTopicStatisticsResponse = Paths1TzwckqApiV1TopicSuggestionsIdConversationsGetResponses200ContentApplicationJsonSchema;
/** Optional parameters. */
export interface ContextAPIOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}
//# sourceMappingURL=index.d.ts.map