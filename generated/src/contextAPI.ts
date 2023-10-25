import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import { LogImpl, SuggestedImpl } from "./operations";
import { Log, Suggested } from "./operationsInterfaces";
import * as Parameters from "./models/parameters";
import * as Mappers from "./models/mappers";
import {
  ContextAPIOptionalParams,
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
    this.log = new LogImpl(this);
    this.suggested = new SuggestedImpl(this);
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

  log: Log;
  suggested: Suggested;
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

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
  queryParameters: [Parameters.startTime, Parameters.endTime],
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.authorization],
  serializer
};
