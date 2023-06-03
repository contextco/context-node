import { LogConversationOptionalParams } from "../models";
/** Interface representing a Log. */
export interface Log {
    /**
     * Ingests a conversation
     * @param options The options parameters.
     */
    conversation(options?: LogConversationOptionalParams): Promise<void>;
}
//# sourceMappingURL=log.d.ts.map