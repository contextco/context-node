import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing Log operations. */
export class LogImpl {
    /**
     * Initialize a new instance of the class Log class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Ingests a conversation
     * @param options The options parameters.
     */
    conversation(options) {
        return this.client.sendOperationRequest({ options }, conversationOperationSpec);
    }
    /**
     * Ingests or updates conversation
     * @param options The options parameters.
     */
    conversationUpsert(options) {
        return this.client.sendOperationRequest({ options }, conversationUpsertOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const conversationOperationSpec = {
    path: "/api/v1/log/conversation",
    httpMethod: "POST",
    responses: { 201: {} },
    requestBody: Parameters.body,
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.authorization, Parameters.contentType],
    mediaType: "json",
    serializer
};
const conversationUpsertOperationSpec = {
    path: "/api/v1/log/conversation/upsert",
    httpMethod: "POST",
    responses: { 201: {} },
    requestBody: Parameters.body1,
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.authorization, Parameters.contentType],
    mediaType: "json",
    serializer
};
//# sourceMappingURL=log.js.map