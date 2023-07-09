# Development Instructions

## Building a new version

1. Generate new code from the OpenAPI Spec:

   ```
   autorest README.md --input-file=/Users/alex/scratch/context/web/swagger/v1/swagger.yaml
   ```

2. Fix the issue with credentials by editing the generated/src/contextAPI.ts, changing the credentials -> options.credentials. This fixes https://github.com/Azure/autorest.typescript/issues/1724.

3. Add the --bundleConfigAsCjs flag to the rollup stage of the generated typescript.

4. Build and test a new version of the package:
   
   ```
   $ npm run build
   $ cd examples && npm run build
   $ GETCONTEXT_TOKEN=*** node build/log_conversation.js
   ```

5. Bump the version in `package.json`

## Publishing

1. Install and push a new version:

   ```
   npm publish --access public
   ```
