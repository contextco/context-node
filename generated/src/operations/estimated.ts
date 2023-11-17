import { Estimated } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ContextAPI } from "../contextAPI";
import { EstimatedCostOptionalParams, EstimatedCostResponse } from "../models";

/** Class containing Estimated operations. */
export class EstimatedImpl implements Estimated {
  private readonly client: ContextAPI;

  /**
   * Initialize a new instance of the class Estimated class.
   * @param client Reference to the service client
   */
  constructor(client: ContextAPI) {
    this.client = client;
  }

  /**
   * Returns estimated cost details
   * @param options The options parameters.
   */
  cost(options?: EstimatedCostOptionalParams): Promise<EstimatedCostResponse> {
    return this.client.sendOperationRequest({ options }, costOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const costOperationSpec: coreClient.OperationSpec = {
  path: "/api/v1/conversations/series/estimated_cost",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1J9XfjaApiV1ConversationsSeriesEstimatedCostGetResponses200ContentApplicationJsonSchema
    }
  },
  queryParameters: [
    Parameters.tenantId,
    Parameters.startTime,
    Parameters.endTime,
    Parameters.period
  ],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.authorization],
  serializer
};
