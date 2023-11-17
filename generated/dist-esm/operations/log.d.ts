import { Log } from "../operationsInterfaces";
import { ContextAPI } from "../contextAPI";
import { LogConversationOptionalParams, LogConversationUpsertOptionalParams, LogConversationThreadOptionalParams, LogConversationThreadResponse } from "../models";
/** Class containing Log operations. */
export declare class LogImpl implements Log {
    private readonly client;
    /**
     * Initialize a new instance of the class Log class.
     * @param client Reference to the service client
     */
    constructor(client: ContextAPI);
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
//# sourceMappingURL=log.d.ts.map