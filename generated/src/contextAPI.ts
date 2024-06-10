import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import { EvaluationsImpl, LogImpl } from "./operations";
import { Evaluations, Log } from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  ContextAPIOptionalParams,
  ConversationSeriesOptionalParams,
  ConversationSeriesResponse,
  SentimentOptionalParams,
  SentimentResponse,
  RatingOptionalParams,
  RatingResponse,
  EstimatedCostOptionalParams,
  EstimatedCostResponse,
  VolumeOptionalParams,
  VolumeResponse,
  ConversationOptionalParams,
  ConversationOperationResponse,
  ConversationsOptionalParams,
  ConversationsResponse
} from "./models";

export class ContextAPI extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the ContextAPI class.
   * @param options The parameter options
   */
  constructor(options?: ContextAPIOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: ContextAPIOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };

    const packageDetails = `azsdk-js-context-generated/1.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix
      },
      endpoint: options.endpoint ?? options.baseUri ?? "https://api.context.ai"
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] = options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: options.credential,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge
          }
        })
      );
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
  conversationSeries(
    options?: ConversationSeriesOptionalParams
  ): Promise<ConversationSeriesResponse> {
    return this.sendOperationRequest(
      { options },
      conversationSeriesOperationSpec
    );
  }

  /**
   * Returns sentiment details
   * @param options The options parameters.
   */
  sentiment(options?: SentimentOptionalParams): Promise<SentimentResponse> {
    return this.sendOperationRequest({ options }, sentimentOperationSpec);
  }

  /**
   * Returns rating details
   * @param options The options parameters.
   */
  rating(options?: RatingOptionalParams): Promise<RatingResponse> {
    return this.sendOperationRequest({ options }, ratingOperationSpec);
  }

  /**
   * Returns estimated cost details
   * @param options The options parameters.
   */
  estimatedCost(
    options?: EstimatedCostOptionalParams
  ): Promise<EstimatedCostResponse> {
    return this.sendOperationRequest({ options }, estimatedCostOperationSpec);
  }

  /**
   * Returns volume details
   * @param options The options parameters.
   */
  volume(options?: VolumeOptionalParams): Promise<VolumeResponse> {
    return this.sendOperationRequest({ options }, volumeOperationSpec);
  }

  /**
   * Returns conversation details
   * @param id
   * @param options The options parameters.
   */
  conversation(
    id: string,
    options?: ConversationOptionalParams
  ): Promise<ConversationOperationResponse> {
    return this.sendOperationRequest(
      { id, options },
      conversationOperationSpec
    );
  }

  /**
   * Returns list of conversations
   * @param options The options parameters.
   */
  conversations(
    options?: ConversationsOptionalParams
  ): Promise<ConversationsResponse> {
    return this.sendOperationRequest({ options }, conversationsOperationSpec);
  }

  evaluations: Evaluations;
  log: Log;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const conversationSeriesOperationSpec: coreClient.OperationSpec = {
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
const sentimentOperationSpec: coreClient.OperationSpec = {
  path: "/api/v1/conversations/series/sentiment",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1AqjttjApiV1ConversationsSeriesSentimentGetResponses200ContentApplicationJsonSchema
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
const ratingOperationSpec: coreClient.OperationSpec = {
  path: "/api/v1/conversations/series/rating",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsXq2NqjApiV1ConversationsSeriesRatingGetResponses200ContentApplicationJsonSchema
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
const estimatedCostOperationSpec: coreClient.OperationSpec = {
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
const volumeOperationSpec: coreClient.OperationSpec = {
  path: "/api/v1/conversations/series/volume",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.Paths1Ola7DlApiV1ConversationsSeriesVolumeGetResponses200ContentApplicationJsonSchema
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
const conversationOperationSpec: coreClient.OperationSpec = {
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
const conversationsOperationSpec: coreClient.OperationSpec = {
  path: "/api/v1/conversations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper:
        Mappers.PathsY5Azv9ApiV1ConversationsGetResponses200ContentApplicationJsonSchema
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
