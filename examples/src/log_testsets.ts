import { ContextAPI, ContextAPIOptionalParams, KnownTestCaseFrom, KnownMessageParamsRole, Credential } from "@contextco/context-node";

const options: ContextAPIOptionalParams = {
  credential: new Credential(process.env.CONTEXT_TOKEN!),
};
const c = new ContextAPI( options,);

c.log.testSets(
  {
    copyTestCasesFrom: KnownTestCaseFrom.None,
    body: {
      name: "My TS LLM test set",
      testCases: [
        {
          name: "My TS LLM test case",
          model: "gpt-4",
          messages: [
            {
              message: "You are a super TS LLM agent.",
              role: KnownMessageParamsRole.System
            },
            {
              message: "Hello Agent!",
              role: KnownMessageParamsRole.User
            },
          ],
        },
      ],
    },
  }
);