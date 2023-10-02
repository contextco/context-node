import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';

export declare class ContextAPI extends coreClient.ServiceClient {
    $host: string;
    /**
     * Initializes a new instance of the ContextAPI class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, options?: ContextAPIOptionalParams);
    log: Log;
}

/** Optional parameters. */
export declare interface ContextAPIOptionalParams extends coreClient.ServiceClientOptions {
    /** server parameter */
    $host?: string;
    /** Overrides client endpoint. */
    endpoint?: string;
}

export declare interface Conversation {
    messages?: ConversationMessagesItem[];
    /** Any object */
    metadata?: Record<string, unknown>;
}

export declare interface ConversationMessagesItem {
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
    body?: PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema;
    authorization?: string;
}

/** Optional parameters. */
export declare interface LogConversationUpsertOptionalParams extends coreClient.OperationOptions {
    authorization?: string;
    body?: PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchema;
}

export declare interface Message {
    type?: "message";
    role: MessageRole;
    message: string;
    eventTimestamp?: Date;
    /** Any object */
    metadata?: Record<string, unknown>;
    rating?: Rating;
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

export declare interface PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema {
    conversation?: Conversation;
}

export declare interface PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchema {
    conversation?: Conversation;
}

/** Defines values for Rating. */
export declare type Rating = -1 | 0 | 1;

export declare interface Tool {
    type?: "tool";
    name: string;
    thought?: string;
    /** Any object */
    input?: Record<string, unknown>;
    observation?: string;
    eventTimestamp?: Date;
}

export { }
