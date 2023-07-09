import {
  LogConversationOptionalParams,
  LogConversationUpsertOptionalParams
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
}
