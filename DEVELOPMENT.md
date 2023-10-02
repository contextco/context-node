# Development Instructions

## Building a new version

1. Generate new code from the OpenAPI Spec:

   ```
   autorest README.md --input-file=/Users/alex/scratch/context/web/swagger/v1/swagger.yaml
   ```

2. Fix the issue with credentials by editing the generated/src/contextAPI.ts, changing the credentials -> options.credential. This fixes https://github.com/Azure/autorest.typescript/issues/1724.

3. Add the --bundleConfigAsCjs flag to the rollup stage of the generated typescript.

4. Build and test a new version of the package:
   
   ```
   $ cd generated && npm run build
   ```

   1. Swap @context-co/generated to point to the local version in package.json by replacing the version string with "file:./generated"

   2. Build the root of the project
   ```
   $ npm run build
   ```
   
   3. Build and test the examples
   ```
   $ cd examples && npm run build
   $ CONTEXT_TOKEN=*** node build/log_conversation.js
   ```
   
4. Bump the version of the generated package and publish a new version.

```
$ cd generated && npm publish --access public
```

5. Revert the dependency on the local version of the generated package

6. Bump the version in `package.json`

## Publishing

1. Install and push a new version:

   ```
   npm publish --access public
   ```
