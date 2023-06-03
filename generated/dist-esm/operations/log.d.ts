import { Log } from "../operationsInterfaces";
import { ContextAPI } from "../contextAPI";
import { LogConversationOptionalParams } from "../models";
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
}
//# sourceMappingURL=log.d.ts.map