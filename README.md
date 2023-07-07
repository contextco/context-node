
# Context Node Library

[![Npm package version](https://badgen.net/npm/v/@contextco/context-node)](https://npmjs.com/package/@contextco/context-node)

The Context Node library provides a convenient way to interface with the Context APIs. We include pre-defined classes and operations to interact with API resources.

## Installation

### NPM

```shell
npm install @contextco/context-node
```

### Yarn

```shell
yarn add @contextco/context-node
```

## Usage

The library needs to be configured with your Context API key, which is available in the [Context Settings Dashboard](https://go.getcontext.ai/settings).

### Example

```typescript
import { ContextAPI, ContextAPIOptionalParams, KnownMessageRole, Credential } from "context-js";

const options: ContextAPIOptionalParams = {
  credential: new Credential(process.env.CONTEXT_TOKEN),
};
const c = new ContextAPI(options);

await c.log.conversation({
  body: {
    conversation: {
      messages: [
        { message: "You are a helpful assistant.", role: KnownMessageRole.System, rating: 0 },
        { message: "Hi, how are you doing?", role: KnownMessageRole.User, rating: 0 },
        { message: "I'm doing super well, how are you?", role: KnownMessageRole.Assistant, rating: 1 }
      ],
    }
  }
})
```

## Appendix

```yaml
typescript: true
output-folder: generated
source-code-folder-path: src
package-name: context-generated
clear-output-folder: true
credential-default-policy-type: BearerTokenCredentialPolicy
azure-arm: false
add-credentials: true
credential-scopes: all
models-mode: msrest
generate-metadata: true
```
