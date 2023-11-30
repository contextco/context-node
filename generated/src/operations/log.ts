import { Log } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContextAPI } from "../contextAPI";
import {
  LogConversationOptionalParams,
  LogConversationUpsertOptionalParams,
  LogConversationThreadOptionalParams,
  LogConversationThreadResponse,
  LogTestSetsOptionalParams,
  LogTestSetsResponse
} from "../models";

/** Class containing Log operations. */
export class LogImpl implements Log {
  private readonly client: ContextAPI;

  /**
   * Initialize a new instance of the class Log class.
   * @param client Reference to the service client
   */
  constructor(client: ContextAPI) {
    this.client = client;
  }

  /**
   * Ingests a conversation
   * @param options The options parameters.
   */
  conversation(options?: LogConversationOptionalParams): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      conversationOperationSpec
    );
  }

  /**
   * Ingests or updates conversation
   * @param options The options parameters.
   */
  conversationUpsert(
    options?: LogConversationUpsertOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { options },
      conversationUpsertOperationSpec
    );
  }

  /**
   * Ingests or updates a thread
   * @param options The options parameters.
   */
  conversationThread(
    options?: LogConversationThreadOptionalParams
  ): Promise<LogConversationThreadResponse> {
    return this.client.sendOperationRequest(
      { options },
      conversationThreadOperationSpec
    );
  }

  /**
   * Returns test set and version details
   * @param options The options parameters.
   */
  testSets(options?: LogTestSetsOptionalParams): Promise<LogTestSetsResponse> {
    return this.client.sendOperationRequest({ options }, testSetsOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const conversationOperationSpec: coreClient.OperationSpec = {
  path: "/api/v1/log/conversation",
  httpMethod: "POST",
  responses: { 201: {} },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.authorization, Parameters.contentType],
  mediaType: "json",
  serializer
};
const conversationUpsertOperationSpec: coreClient.OperationSpec = {
  path: "/api/v1/log/conversation/upsert",
  httpMethod: "POST",
  responses: { 201: {} },
  requestBody: Parameters.body1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.authorization, Parameters.contentType],
  mediaType: "json",
  serializer
};
const conversationThreadOperationSpec: coreClient.OperationSpec = {
  path: "/api/v1/log/conversation/thread",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper:
        Mappers.PathsDo7Pm8ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchema
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
const testSetsOperationSpec: coreClient.OperationSpec = {
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
