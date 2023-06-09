import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import { LogImpl } from "./operations";
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
            }, endpoint: (_b = (_a = options.endpoint) !== null && _a !== void 0 ? _a : options.baseUri) !== null && _b !== void 0 ? _b : "https://api.getcontext.ai" });
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
        this.$host = options.$host || "https://api.getcontext.ai";
        this.log = new LogImpl(this);
    }
}
//# sourceMappingURL=contextAPI.js.map