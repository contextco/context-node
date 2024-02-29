import { ContextAPI, ContextAPIOptionalParams, KnownMessageRole, Credential } from "@contextco/context-node";

const options: ContextAPIOptionalParams = {
  credential: new Credential(process.env.CONTEXT_TOKEN!),
};
const c = new ContextAPI( options,);

c.log.conversationUpsert({
  body: {
    conversation: {
      feedback: "The agent resolved my query very fast - thank you!",
      messages: [
        { message: "You are a very helpful assistant.", role: KnownMessageRole.System, rating: 0 },
        { type: 'message', message: "Hi there, how are you doing?", role: KnownMessageRole.User, rating: 0 },
        { type: 'tool', name: 'greeting_tool', thought: "I should use the greeting tool", input: {"remark": "how are you doing?"}, observation: "I'm doing super well, how are you?"},
        { message: "I'm doing super well, how are you?", role: KnownMessageRole.Assistant, rating: 1 },
      ],
    }
  }
});

c.log.conversationUpsert({
  body: {
    conversation: {
      messages: [
        { message: "You are a very helpful assistant.", role: KnownMessageRole.System, rating: 0 },
        { message: "Hi there, how are you doing?", role: KnownMessageRole.User, rating: 0 },
        { message: "I'm doing super well, how are you?", role: KnownMessageRole.Assistant, rating: 1 }
      ],
    }
  }
});

c.log.conversationThread({
  body: {
    conversation: {
      id: "test1234",
      messages: [
        { message: "You are a very helpful assistant.", role: KnownMessageRole.System, rating: 0 },
        { message: "Hi there, how are you doing?", role: KnownMessageRole.User, rating: 0 },
        { message: "I'm doing super well, how are you?", role: KnownMessageRole.Assistant, rating: 1 }
      ],
    }
  }
});
