import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing Test operations. */
export class TestImpl {
    /**
     * Initialize a new instance of the class Test class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Returns test set and version details
     * @param options The options parameters.
     */
    sets(options) {
        return this.client.sendOperationRequest({ options }, setsOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const setsOperationSpec = {
    path: "/api/v1/test_sets",
    httpMethod: "POST",
    responses: {
        201: {
            bodyMapper: Mappers.TestSet
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
//# sourceMappingURL=test.js.map