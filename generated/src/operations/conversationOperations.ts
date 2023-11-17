import { ConversationOperations } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContextAPI } from "../contextAPI";
import {
  ConversationSeriesOptionalParams,
  ConversationSeriesResponse
} from "../models";

/** Class containing ConversationOperations operations. */
export class ConversationOperationsImpl implements ConversationOperations {
  private readonly client: ContextAPI;

  /**
   * Initialize a new instance of the class ConversationOperations class.
   * @param client Reference to the service client
   */
  constructor(client: ContextAPI) {
    this.client = client;
  }

  /**
   * Returns index of series
   * @param options The options parameters.
   */
  series(
    options?: ConversationSeriesOptionalParams
  ): Promise<ConversationSeriesResponse> {
    return this.client.sendOperationRequest({ options }, seriesOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const seriesOperationSpec: coreClient.OperationSpec = {
  path: "/api/v1/conversations/series",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsPixtmzApiV1ConversationsSeriesGetResponses200ContentApplicationJsonSchema
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.authorization],
  serializer
};
