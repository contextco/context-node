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
    /**
     * Ingests or updates a thread
     * @param options The options parameters.
     */
    conversationThread(options) {
        return this.client.sendOperationRequest({ options }, conversationThreadOperationSpec);
    }
    /**
     * Returns test set and version details
     * @param options The options parameters.
     */
    testSets(options) {
        return this.client.sendOperationRequest({ options }, testSetsOperationSpec);
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
const conversationThreadOperationSpec = {
    path: "/api/v1/log/conversation/thread",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Mappers.PathsDo7Pm8ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchema
        }
    },
    requestBody: Parameters.body2,
    urlParameters: [Parameters.$host],
    headerParameters: [
        Parameters.accept,
        Parameters.authorization,
        Parameters.contentType
    ],
    mediaType: "json",
    serializer
};
const testSetsOperationSpec = {
    path: "/api/v1/test_sets",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Mappers.TestSetParams
        }
    },
    requestBody: Parameters.body3,
    queryParameters: [Parameters.copyTestCasesFrom],
    urlParameters: [Parameters.$host],
    headerParameters: [
        Parameters.accept,
        Parameters.authorization,
        Parameters.contentType
    ],
    mediaType: "json",
    serializer
};
//# sourceMappingURL=log.js.map