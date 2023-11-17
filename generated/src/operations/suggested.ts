import { Suggested } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContextAPI } from "../contextAPI";
import {
  SuggestedTopicsOptionalParams,
  SuggestedTopicsResponse,
  SuggestedTopicConversationsOptionalParams,
  SuggestedTopicConversationsResponse,
  SuggestedTopicStatisticsOptionalParams,
  SuggestedTopicStatisticsResponse
} from "../models";

/** Class containing Suggested operations. */
export class SuggestedImpl implements Suggested {
  private readonly client: ContextAPI;

  /**
   * Initialize a new instance of the class Suggested class.
   * @param client Reference to the service client
   */
  constructor(client: ContextAPI) {
    this.client = client;
  }

  /**
   * Returns suggested topics details
   * @param options The options parameters.
   */
  topics(
    options?: SuggestedTopicsOptionalParams
  ): Promise<SuggestedTopicsResponse> {
    return this.client.sendOperationRequest({ options }, topicsOperationSpec);
  }

  /**
   * Returns statistics of selected topic
   * @param id
   * @param options The options parameters.
   */
  topicConversations(
    id: string,
    options?: SuggestedTopicConversationsOptionalParams
  ): Promise<SuggestedTopicConversationsResponse> {
    return this.client.sendOperationRequest(
      { id, options },
      topicConversationsOperationSpec
    );
  }

  /**
   * Returns a list of conversations matching given topic
   * @param id
   * @param options The options parameters.
   */
  topicStatistics(
    id: string,
    options?: SuggestedTopicStatisticsOptionalParams
  ): Promise<SuggestedTopicStatisticsResponse> {
    return this.client.sendOperationRequest(
      { id, options },
      topicStatisticsOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const topicsOperationSpec: coreClient.OperationSpec = {
  path: "/api/v1/topic_suggestions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1U893W0ApiV1TopicSuggestionsGetResponses200ContentApplicationJsonSchema
    }
  },
  queryParameters: [Parameters.page, Parameters.perPage],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.authorization],
  serializer
};
const topicConversationsOperationSpec: coreClient.OperationSpec = {
  path: "/api/v1/topic_suggestions/{id}/statistics",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths11Gsqt2ApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.authorization],
  serializer
};
const topicStatisticsOperationSpec: coreClient.OperationSpec = {
  path: "/api/v1/topic_suggestions/{id}/conversations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1TzwckqApiV1TopicSuggestionsIdConversationsGetResponses200ContentApplicationJsonSchema
    }
  },
  queryParameters: [
    Parameters.startTime,
    Parameters.endTime,
    Parameters.page,
    Parameters.perPage
  ],
  urlParameters: [Parameters.$host, Parameters.id],
  headerParameters: [Parameters.accept, Parameters.authorization],
  serializer
};
