import * as coreClient from "@azure/core-client";

export interface PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema {
  conversation?: Conversation;
}

export interface Conversation {
  messages?: Message[];
  /** Any object */
  metadata?: Record<string, unknown>;
}

export interface Message {
  type?: MessageType;
  eventTimestamp?: Date;
  role?: MessageRole;
  message?: string;
  /** Any object */
  metadata?: Record<string, unknown>;
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

/** Known values of {@link MessageType} that the service accepts. */
export enum KnownMessageType {
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
export enum KnownMessageRole {
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
/** Defines values for Rating. */
export type Rating = -1 | 0 | 1;

/** Optional parameters. */
export interface LogConversationOptionalParams
  extends coreClient.OperationOptions {
  body?: PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema;
  authorization?: string;
}

/** Optional parameters. */
export interface LogConversationUpsertOptionalParams
  extends coreClient.OperationOptions {
  authorization?: string;
  body?: PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchema;
}

/** Optional parameters. */
export interface ContextAPIOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
