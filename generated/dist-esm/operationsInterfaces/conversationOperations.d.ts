import { ConversationSeriesOptionalParams, ConversationSeriesResponse } from "../models";
/** Interface representing a ConversationOperations. */
export interface ConversationOperations {
    /**
     * Returns index of series
     * @param options The options parameters.
     */
    series(options?: ConversationSeriesOptionalParams): Promise<ConversationSeriesResponse>;
}
//# sourceMappingURL=conversationOperations.d.ts.map