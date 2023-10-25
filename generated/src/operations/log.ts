import { Log } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContextAPI } from "../contextAPI";
import {
  LogConversationOptionalParams,
  LogConversationUpsertOptionalParams
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
