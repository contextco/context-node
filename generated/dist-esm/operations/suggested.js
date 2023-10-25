import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing Suggested operations. */
export class SuggestedImpl {
    /**
     * Initialize a new instance of the class Suggested class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Returns suggested topics details
     * @param options The options parameters.
     */
    topics(options) {
        return this.client.sendOperationRequest({ options }, topicsOperationSpec);
    }
    /**
     * Returns statistics of selected topic
     * @param id
     * @param options The options parameters.
     */
    topicConversations(id, options) {
        return this.client.sendOperationRequest({ id, options }, topicConversationsOperationSpec);
    }
    /**
     * Returns a list of conversations matching given topic
     * @param id
     * @param options The options parameters.
     */
    topicStatistics(id, options) {
        return this.client.sendOperationRequest({ id, options }, topicStatisticsOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const topicsOperationSpec = {
    path: "/api/v1/topic_suggestions",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1U893W0ApiV1TopicSuggestionsGetResponses200ContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept, Parameters.authorization],
    serializer
};
const topicConversationsOperationSpec = {
    path: "/api/v1/topic_suggestions/{id}/statistics",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths11Gsqt2ApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.id],
    headerParameters: [Parameters.accept, Parameters.authorization],
    serializer
};
const topicStatisticsOperationSpec = {
    path: "/api/v1/topic_suggestions/{id}/conversations",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1TzwckqApiV1TopicSuggestionsIdConversationsGetResponses200ContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host, Parameters.id],
    headerParameters: [Parameters.accept, Parameters.authorization],
    serializer
};
//# sourceMappingURL=suggested.js.map