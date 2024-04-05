import * as coreClient from "@azure/core-client";
export interface PathsPixtmzApiV1ConversationsSeriesGetResponses200ContentApplicationJsonSchema {
    available: string[];
}
export interface Paths1AqjttjApiV1ConversationsSeriesSentimentGetResponses200ContentApplicationJsonSchema {
    series: SeriesItem[];
    type: string;
    period: string;
    startTime: string;
    endTime: string;
}
export interface SeriesItem {
    name: string;
    /** Dictionary of <number> */
    data: {
        [propertyName: string]: number | null;
    };
}
export interface PathsXq2NqjApiV1ConversationsSeriesRatingGetResponses200ContentApplicationJsonSchema {
    series: SeriesItem[];
    type: string;
    period: string;
    startTime: string;
    endTime: string;
}
export interface Paths1J9XfjaApiV1ConversationsSeriesEstimatedCostGetResponses200ContentApplicationJsonSchema {
    series: SeriesItem[];
    type: string;
    period: string;
    startTime: string;
    endTime: string;
}
export interface Paths1Ola7DlApiV1ConversationsSeriesVolumeGetResponses200ContentApplicationJsonSchema {
    series: SeriesItem[];
    type: string;
    period: string;
    startTime: string;
    endTime: string;
}
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
    conversations: ConversationResponse[];
    pagination: Pagination;
}
export interface Pagination {
    totalRecords: number;
    perPage: number;
    currentPage: number;
    previousPage: number | null;
    nextPage: number | null;
    pageCount: number;
}
export interface VersionRunParams {
    testSetName: string;
    version: number;
    iterations?: number;
}
export interface Paths2XppqwApiV1EvaluationsRunPostResponses202ContentApplicationJsonSchema {
    status?: string;
    data?: Paths14Bf6A5ApiV1EvaluationsRunPostResponses202ContentApplicationJsonSchemaPropertiesData;
}
export interface Paths14Bf6A5ApiV1EvaluationsRunPostResponses202ContentApplicationJsonSchemaPropertiesData {
    runId?: string;
}
export interface EvaluationsRunResponse {
    id: string;
    status: EvaluationsRunResponseStatus;
    progress: EvaluationsRunResponseProgress;
    startedAt?: Date;
    details: EvaluationsRunResponseDetails;
    results?: TestCaseRun[];
}
export interface EvaluationsRunResponseProgress {
    completed?: number;
    pending?: number;
}
export interface EvaluationsRunResponseDetails {
    testSetName?: string;
    version?: number;
}
export interface TestCaseRun {
    iteration?: number;
    testCase: TestCaseDetails;
    evaluations: Evaluation[];
}
export interface TestCaseDetails {
    name: string;
    input: TestCaseMessage[];
    output: TestCaseMessage[];
}
export interface TestCaseMessage {
    message: string;
    role: TestCaseMessageRole;
}
export interface Evaluation {
    evaluatorName: string;
    outcome: EvaluationOutcome;
    reasoning?: string;
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
    feedback?: string;
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
export interface Paths1S2Rf6XApiV1LogConversationThreadPostRequestbodyContentApplicationJsonSchema {
    conversation?: Thread;
}
export interface Thread {
    id?: string;
    messages: Message[];
    /** Dictionary of <string> */
    metadata?: {
        [propertyName: string]: string;
    };
    feedback?: string;
}
export interface PathsDo7Pm8ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchema {
    status?: string;
    data?: Paths1O34Sy5ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchemaPropertiesData;
}
export interface Paths1O34Sy5ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchemaPropertiesData {
    id?: string;
}
export interface TestSet {
    name: string;
    testCases: TestCase[];
    evaluators?: Evaluator[];
}
export interface TestCase {
    name: string;
    model?: string;
    /** Any object */
    modelConfig?: Record<string, unknown>;
    messages: TestCaseMessage[];
    pregeneratedResponse?: string;
    evaluators?: Evaluator[];
}
export interface Evaluator {
    evaluator?: string;
    /** Any object */
    options?: Record<string, unknown>;
}
export interface TestSetParams {
    name: string;
    version: number;
}
export interface Paths1U893W0ApiV1TopicSuggestionsGetResponses200ContentApplicationJsonSchema {
    topics: TopicWithSamples[];
    pagination: Pagination;
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
    conversations: ConversationResponse[];
    pagination: Pagination;
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
/** Known values of {@link EvaluationsRunResponseStatus} that the service accepts. */
export declare enum KnownEvaluationsRunResponseStatus {
    /** Pending */
    Pending = "pending",
    /** Running */
    Running = "running",
    /** Completed */
    Completed = "completed",
    /** Errored */
    Errored = "errored"
}
/**
 * Defines values for EvaluationsRunResponseStatus. \
 * {@link KnownEvaluationsRunResponseStatus} can be used interchangeably with EvaluationsRunResponseStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **pending** \
 * **running** \
 * **completed** \
 * **errored**
 */
export type EvaluationsRunResponseStatus = string;
/** Known values of {@link TestCaseMessageRole} that the service accepts. */
export declare enum KnownTestCaseMessageRole {
    /** System */
    System = "system",
    /** Assistant */
    Assistant = "assistant",
    /** User */
    User = "user"
}
/**
 * Defines values for TestCaseMessageRole. \
 * {@link KnownTestCaseMessageRole} can be used interchangeably with TestCaseMessageRole,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **system** \
 * **assistant** \
 * **user**
 */
export type TestCaseMessageRole = string;
/** Known values of {@link EvaluationOutcome} that the service accepts. */
export declare enum KnownEvaluationOutcome {
    /** Negative */
    Negative = "negative",
    /** Positive */
    Positive = "positive",
    /** Inconclusive */
    Inconclusive = "inconclusive",
    /** PartiallyPassed */
    PartiallyPassed = "partially_passed"
}
/**
 * Defines values for EvaluationOutcome. \
 * {@link KnownEvaluationOutcome} can be used interchangeably with EvaluationOutcome,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **negative** \
 * **positive** \
 * **inconclusive** \
 * **partially_passed**
 */
export type EvaluationOutcome = string;
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
/** Known values of {@link TestCaseFrom} that the service accepts. */
export declare enum KnownTestCaseFrom {
    /** None */
    None = "none",
    /** PriorVersion */
    PriorVersion = "prior_version"
}
/**
 * Defines values for TestCaseFrom. \
 * {@link KnownTestCaseFrom} can be used interchangeably with TestCaseFrom,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **none** \
 * **prior_version**
 */
export type TestCaseFrom = string;
/** Defines values for Rating. */
export type Rating = -1 | 0 | 1;
/** Optional parameters. */
export interface ConversationSeriesOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
}
/** Contains response data for the conversationSeries operation. */
export type ConversationSeriesResponse = PathsPixtmzApiV1ConversationsSeriesGetResponses200ContentApplicationJsonSchema;
/** Optional parameters. */
export interface SentimentOptionalParams extends coreClient.OperationOptions {
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
export type SentimentResponse = Paths1AqjttjApiV1ConversationsSeriesSentimentGetResponses200ContentApplicationJsonSchema;
/** Optional parameters. */
export interface RatingOptionalParams extends coreClient.OperationOptions {
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
export type RatingResponse = PathsXq2NqjApiV1ConversationsSeriesRatingGetResponses200ContentApplicationJsonSchema;
/** Optional parameters. */
export interface EstimatedCostOptionalParams extends coreClient.OperationOptions {
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
/** Contains response data for the estimatedCost operation. */
export type EstimatedCostResponse = Paths1J9XfjaApiV1ConversationsSeriesEstimatedCostGetResponses200ContentApplicationJsonSchema;
/** Optional parameters. */
export interface VolumeOptionalParams extends coreClient.OperationOptions {
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
export type VolumeResponse = Paths1Ola7DlApiV1ConversationsSeriesVolumeGetResponses200ContentApplicationJsonSchema;
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
    /** Page number of results to return. Defaults to 1.<br /> */
    page?: number;
    /** Number of results to return per page. Defaults to 20.<br /> */
    perPage?: number;
    /** Filter by tenant id.<br /> */
    tenantId?: number;
}
/** Contains response data for the conversations operation. */
export type ConversationsResponse = PathsY5Azv9ApiV1ConversationsGetResponses200ContentApplicationJsonSchema;
/** Optional parameters. */
export interface SuggestedTopicsOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    /** Page number of results to return. Defaults to 1.<br /> */
    page?: number;
    /** Number of results to return per page. Defaults to 20.<br /> */
    perPage?: number;
}
/** Contains response data for the suggestedTopics operation. */
export type SuggestedTopicsResponse = Paths1U893W0ApiV1TopicSuggestionsGetResponses200ContentApplicationJsonSchema;
/** Optional parameters. */
export interface SuggestedTopicConversationsOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
}
/** Contains response data for the suggestedTopicConversations operation. */
export type SuggestedTopicConversationsResponse = Paths11Gsqt2ApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchema;
/** Optional parameters. */
export interface SuggestedTopicStatisticsOptionalParams extends coreClient.OperationOptions {
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
/** Contains response data for the suggestedTopicStatistics operation. */
export type SuggestedTopicStatisticsResponse = Paths1TzwckqApiV1TopicSuggestionsIdConversationsGetResponses200ContentApplicationJsonSchema;
/** Optional parameters. */
export interface EvaluationsRunOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    body?: VersionRunParams;
}
/** Contains response data for the run operation. */
export type EvaluationsRunOperationResponse = Paths2XppqwApiV1EvaluationsRunPostResponses202ContentApplicationJsonSchema;
/** Optional parameters. */
export interface EvaluationsResultOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
}
/** Contains response data for the result operation. */
export type EvaluationsResultResponse = EvaluationsRunResponse;
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
export interface LogConversationThreadOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    body?: Paths1S2Rf6XApiV1LogConversationThreadPostRequestbodyContentApplicationJsonSchema;
}
/** Contains response data for the conversationThread operation. */
export type LogConversationThreadResponse = PathsDo7Pm8ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchema;
/** Optional parameters. */
export interface LogTestSetsOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    body?: TestSet;
    /** If none, all test cases will be replaced with the ones provided in the request.<br />If prior_version, only the test cases with the same name will be replaced and new test cases will be appended.<br /> */
    copyTestCasesFrom?: string;
}
/** Contains response data for the testSets operation. */
export type LogTestSetsResponse = TestSetParams;
/** Optional parameters. */
export interface ContextAPIOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}
//# sourceMappingURL=index.d.ts.map