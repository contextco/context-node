import {
  LogConversationOptionalParams,
  LogConversationUpsertOptionalParams,
  LogConversationThreadOptionalParams,
  LogConversationThreadResponse,
  LogUpdateConversationThreadOptionalParams,
  LogTestSetsOptionalParams,
  LogTestSetsResponse
} from "../models";

/** Interface representing a Log. */
export interface Log {
  /**
   * Ingests a conversation
   * @param options The options parameters.
   */
  conversation(options?: LogConversationOptionalParams): Promise<void>;
  /**
   * Ingests or updates conversation
   * @param options The options parameters.
   */
  conversationUpsert(
    options?: LogConversationUpsertOptionalParams
  ): Promise<void>;
  /**
   * Ingests or updates a thread
   * @param options The options parameters.
   */
  conversationThread(
    options?: LogConversationThreadOptionalParams
  ): Promise<LogConversationThreadResponse>;
  /**
   * Updates a thread
   * @param id The thread id of the conversation to update.
   * @param options The options parameters.
   */
  updateConversationThread(
    id: string,
    options?: LogUpdateConversationThreadOptionalParams
  ): Promise<void>;
  /**
   * Returns test set and version details
   * @param options The options parameters.
   */
  testSets(options?: LogTestSetsOptionalParams): Promise<LogTestSetsResponse>;
}
