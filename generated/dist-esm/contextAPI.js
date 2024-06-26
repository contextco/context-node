import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import { EvaluationsImpl, LogImpl } from "./operations";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
export class ContextAPI extends coreClient.ServiceClient {
    /**
     * Initializes a new instance of the ContextAPI class.
     * @param options The parameter options
     */
    constructor(options) {
        var _a, _b, _c;
        // Initializing default values for options
        if (!options) {
            options = {};
        }
        const defaults = {
            requestContentType: "application/json; charset=utf-8"
        };
        const packageDetails = `azsdk-js-context-generated/1.0.0-beta.1`;
        const userAgentPrefix = options.userAgentOptions && options.userAgentOptions.userAgentPrefix
            ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
            : `${packageDetails}`;
        const optionsWithDefaults = Object.assign(Object.assign(Object.assign({}, defaults), options), { userAgentOptions: {
                userAgentPrefix
            }, endpoint: (_b = (_a = options.endpoint) !== null && _a !== void 0 ? _a : options.baseUri) !== null && _b !== void 0 ? _b : "https://api.context.ai" });
        super(optionsWithDefaults);
        let bearerTokenAuthenticationPolicyFound = false;
        if ((options === null || options === void 0 ? void 0 : options.pipeline) && options.pipeline.getOrderedPolicies().length > 0) {
            const pipelinePolicies = options.pipeline.getOrderedPolicies();
            bearerTokenAuthenticationPolicyFound = pipelinePolicies.some((pipelinePolicy) => pipelinePolicy.name ===
                coreRestPipeline.bearerTokenAuthenticationPolicyName);
        }
        if (!options ||
            !options.pipeline ||
            options.pipeline.getOrderedPolicies().length == 0 ||
            !bearerTokenAuthenticationPolicyFound) {
            this.pipeline.removePolicy({
                name: coreRestPipeline.bearerTokenAuthenticationPolicyName
            });
            this.pipeline.addPolicy(coreRestPipeline.bearerTokenAuthenticationPolicy({
                credential: options.credential,
                scopes: (_c = optionsWithDefaults.credentialScopes) !== null && _c !== void 0 ? _c : `${optionsWithDefaults.endpoint}/.default`,
                challengeCallbacks: {
                    authorizeRequestOnChallenge: coreClient.authorizeRequestOnClaimChallenge
                }
            }));
        }
        // Assigning values to Constant parameters
        this.$host = options.$host || "https://api.context.ai";
        this.evaluations = new EvaluationsImpl(this);
        this.log = new LogImpl(this);
    }
    /**
     * Returns index of series
     * @param options The options parameters.
     */
    conversationSeries(options) {
        return this.sendOperationRequest({ options }, conversationSeriesOperationSpec);
    }
    /**
     * Returns sentiment details
     * @param options The options parameters.
     */
    sentiment(options) {
        return this.sendOperationRequest({ options }, sentimentOperationSpec);
    }
    /**
     * Returns rating details
     * @param options The options parameters.
     */
    rating(options) {
        return this.sendOperationRequest({ options }, ratingOperationSpec);
    }
    /**
     * Returns volume details
     * @param options The options parameters.
     */
    volume(options) {
        return this.sendOperationRequest({ options }, volumeOperationSpec);
    }
    /**
     * Returns conversation details
     * @param id
     * @param options The options parameters.
     */
    conversation(id, options) {
        return this.sendOperationRequest({ id, options }, conversationOperationSpec);
    }
    /**
     * Returns list of conversations
     * @param options The options parameters.
     */
    conversations(options) {
        return this.sendOperationRequest({ options }, conversationsOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const conversationSeriesOperationSpec = {
    path: "/api/v1/conversations/series",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PathsPixtmzApiV1ConversationsSeriesGetResponses200ContentApplicationJsonSchema
        }
    },
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept, Parameters.authorization],
    serializer
};
const sentimentOperationSpec = {
    path: "/api/v1/conversations/series/sentiment",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1AqjttjApiV1ConversationsSeriesSentimentGetResponses200ContentApplicationJsonSchema
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
const ratingOperationSpec = {
    path: "/api/v1/conversations/series/rating",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PathsXq2NqjApiV1ConversationsSeriesRatingGetResponses200ContentApplicationJsonSchema
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
const volumeOperationSpec = {
    path: "/api/v1/conversations/series/volume",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.Paths1Ola7DlApiV1ConversationsSeriesVolumeGetResponses200ContentApplicationJsonSchema
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
const conversationOperationSpec = {
    path: "/api/v1/conversations/{id}",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.ConversationResponse
        }
    },
    urlParameters: [Parameters.$host, Parameters.id],
    headerParameters: [Parameters.accept, Parameters.authorization],
    serializer
};
const conversationsOperationSpec = {
    path: "/api/v1/conversations",
    httpMethod: "GET",
    responses: {
        200: {
            bodyMapper: Mappers.PathsY5Azv9ApiV1ConversationsGetResponses200ContentApplicationJsonSchema
        }
    },
    queryParameters: [
        Parameters.startTime,
        Parameters.endTime,
        Parameters.page,
        Parameters.perPage,
        Parameters.tenantId1
    ],
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.accept, Parameters.authorization],
    serializer
};
//# sourceMappingURL=contextAPI.js.map