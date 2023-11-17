import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing ConversationOperations operations. */
export class ConversationOperationsImpl {
    /**
     * Initialize a new instance of the class ConversationOperations class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Returns index of series
     * @param options The options parameters.
     */
    series(options) {
        return this.client.sendOperationRequest({ options }, seriesOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const seriesOperationSpec = {
    path: "/api/v1/conversations/series",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PathsPixtmzApiV1ConversationsSeriesGetResponses200ContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept, Parameters.authorization],
    serializer
};
//# sourceMappingURL=conversationOperations.js.map