import * as coreClient from "@azure/core-client";

export const PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema",
    modelProperties: {
      conversation: {
        serializedName: "conversation",
        type: {
          name: "Composite",
          className: "Conversation"
        }
      }
    }
  }
};

export const Conversation: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Conversation",
    modelProperties: {
      messages: {
        serializedName: "messages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConversationMessagesItem"
            }
          }
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ConversationMessagesItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConversationMessagesItem"
  }
};

export const Message: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Message",
    modelProperties: {
      type: {
        defaultValue: "message",
        isConstant: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      role: {
        serializedName: "role",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        required: true,
        type: {
          name: "String"
        }
      },
      eventTimestamp: {
        serializedName: "event_timestamp",
        type: {
          name: "DateTime"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      rating: {
        serializedName: "rating",
        type: {
          name: "Enum",
          allowedValues: [-1, 0, 1]
        }
      }
    }
  }
};

export const Tool: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Tool",
    modelProperties: {
      type: {
        defaultValue: "tool",
        isConstant: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      thought: {
        serializedName: "thought",
        type: {
          name: "String"
        }
      },
      input: {
        serializedName: "input",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      observation: {
        serializedName: "observation",
        type: {
          name: "String"
        }
      },
      eventTimestamp: {
        serializedName: "event_timestamp",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchema",
    modelProperties: {
      conversation: {
        serializedName: "conversation",
        type: {
          name: "Composite",
          className: "Conversation"
        }
      }
    }
  }
};
