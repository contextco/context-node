import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing Evaluations operations. */
export class EvaluationsImpl {
    /**
     * Initialize a new instance of the class Evaluations class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Submits a test run request
     * @param options The options parameters.
     */
    run(options) {
        return this.client.sendOperationRequest({ options }, runOperationSpec);
    }
    /**
     * Polls a test run for updates and results
     * @param id
     * @param options The options parameters.
     */
    result(id, options) {
        return this.client.sendOperationRequest({ id, options }, resultOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const runOperationSpec = {
    path: "/api/v1/evaluations/run",
    httpMethod: "POST",
    responses: {
        202: {
            bodyMapper: Mappers.Paths2XppqwApiV1EvaluationsRunPostResponses202ContentApplicationJsonSchema
        }
    },
    requestBody: Parameters.body,
    urlParameters: [Parameters.$host],
    headerParameters: [
        Parameters.accept,
        Parameters.authorization,
        Parameters.contentType
    ],
    mediaType: "json",
    serializer
};
const resultOperationSpec = {
    path: "/api/v1/evaluations/run/{id}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.EvaluationsRunResponse
        }
    },
    urlParameters: [Parameters.$host, Parameters.id],
    headerParameters: [Parameters.accept, Parameters.authorization],
    serializer
};
//# sourceMappingURL=evaluations.js.map