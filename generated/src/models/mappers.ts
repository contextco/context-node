import * as coreClient from "@azure/core-client";

export const PathsPixtmzApiV1ConversationsSeriesGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsPixtmzApiV1ConversationsSeriesGetResponses200ContentApplicationJsonSchema",
    modelProperties: {
      available: {
        serializedName: "available",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Paths1AqjttjApiV1ConversationsSeriesSentimentGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1AqjttjApiV1ConversationsSeriesSentimentGetResponses200ContentApplicationJsonSchema",
    modelProperties: {
      series: {
        serializedName: "series",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SeriesItem"
            }
          }
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      period: {
        serializedName: "period",
        required: true,
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "start_time",
        required: true,
        type: {
          name: "String"
        }
      },
      endTime: {
        serializedName: "end_time",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SeriesItem: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SeriesItem",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      data: {
        serializedName: "data",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "Number" } }
        }
      }
    }
  }
};

export const PathsXq2NqjApiV1ConversationsSeriesRatingGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsXq2NqjApiV1ConversationsSeriesRatingGetResponses200ContentApplicationJsonSchema",
    modelProperties: {
      series: {
        serializedName: "series",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SeriesItem"
            }
          }
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      period: {
        serializedName: "period",
        required: true,
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "start_time",
        required: true,
        type: {
          name: "String"
        }
      },
      endTime: {
        serializedName: "end_time",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths1J9XfjaApiV1ConversationsSeriesEstimatedCostGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1J9XfjaApiV1ConversationsSeriesEstimatedCostGetResponses200ContentApplicationJsonSchema",
    modelProperties: {
      series: {
        serializedName: "series",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SeriesItem"
            }
          }
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      period: {
        serializedName: "period",
        required: true,
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "start_time",
        required: true,
        type: {
          name: "String"
        }
      },
      endTime: {
        serializedName: "end_time",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Paths1Ola7DlApiV1ConversationsSeriesVolumeGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1Ola7DlApiV1ConversationsSeriesVolumeGetResponses200ContentApplicationJsonSchema",
    modelProperties: {
      series: {
        serializedName: "series",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SeriesItem"
            }
          }
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      period: {
        serializedName: "period",
        required: true,
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "start_time",
        required: true,
        type: {
          name: "String"
        }
      },
      endTime: {
        serializedName: "end_time",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ConversationResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ConversationResponse",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "metadata",
        required: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      sentimentTrend: {
        serializedName: "sentiment_trend",
        required: true,
        type: {
          name: "String"
        }
      },
      topics: {
        serializedName: "topics",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Topic"
            }
          }
        }
      },
      suggestedTopics: {
        serializedName: "suggested_topics",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Topic"
            }
          }
        }
      },
      messages: {
        serializedName: "messages",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "MessageResponse"
            }
          }
        }
      }
    }
  }
};

export const Topic: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Topic",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
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
      }
    }
  }
};

export const MessageResponse: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MessageResponse",
    modelProperties: {
      type: {
        defaultValue: "message",
        serializedName: "type",
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
      rating: {
        serializedName: "rating",
        required: true,
        type: {
          name: "Enum",
          allowedValues: [-1, 0, 1]
        }
      },
      language: {
        serializedName: "language",
        required: true,
        type: {
          name: "String"
        }
      },
      translation: {
        serializedName: "translation",
        type: {
          name: "String"
        }
      },
      sentiment: {
        serializedName: "sentiment",
        required: true,
        type: {
          name: "Number"
        }
      },
      topics: {
        serializedName: "topics",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Topic"
            }
          }
        }
      },
      suggestedTopics: {
        serializedName: "suggested_topics",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Topic"
            }
          }
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const PathsY5Azv9ApiV1ConversationsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsY5Azv9ApiV1ConversationsGetResponses200ContentApplicationJsonSchema",
    modelProperties: {
      conversations: {
        serializedName: "conversations",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConversationResponse"
            }
          }
        }
      },
      pagination: {
        serializedName: "pagination",
        type: {
          name: "Composite",
          className: "Pagination"
        }
      }
    }
  }
};

export const Pagination: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Pagination",
    modelProperties: {
      totalRecords: {
        serializedName: "total_records",
        required: true,
        type: {
          name: "Number"
        }
      },
      perPage: {
        serializedName: "per_page",
        required: true,
        type: {
          name: "Number"
        }
      },
      currentPage: {
        serializedName: "current_page",
        required: true,
        type: {
          name: "Number"
        }
      },
      previousPage: {
        serializedName: "previous_page",
        required: true,
        nullable: true,
        type: {
          name: "Number"
        }
      },
      nextPage: {
        serializedName: "next_page",
        required: true,
        nullable: true,
        type: {
          name: "Number"
        }
      },
      pageCount: {
        serializedName: "page_count",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

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
              className: "Message"
            }
          }
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const Message: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Message",
    modelProperties: {
      role: {
        serializedName: "role",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      type: {
        defaultValue: "message",
        serializedName: "type",
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
          value: { type: { name: "String" } }
        }
      },
      rating: {
        serializedName: "rating",
        type: {
          name: "Enum",
          allowedValues: [-1, 0, 1]
        }
      },
      name: {
        serializedName: "name",
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

export const Paths1S2Rf6XApiV1LogConversationThreadPostRequestbodyContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1S2Rf6XApiV1LogConversationThreadPostRequestbodyContentApplicationJsonSchema",
    modelProperties: {
      conversation: {
        serializedName: "conversation",
        type: {
          name: "Composite",
          className: "Thread"
        }
      }
    }
  }
};

export const Thread: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Thread",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      messages: {
        serializedName: "messages",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Message"
            }
          }
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const PathsDo7Pm8ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "PathsDo7Pm8ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchema",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      data: {
        serializedName: "data",
        type: {
          name: "Composite",
          className:
            "Paths1O34Sy5ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchemaPropertiesData"
        }
      }
    }
  }
};

export const Paths1O34Sy5ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchemaPropertiesData: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1O34Sy5ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchemaPropertiesData",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TestSetParams: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TestSetParams",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      testCases: {
        serializedName: "test_cases",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TestCase"
            }
          }
        }
      }
    }
  }
};

export const TestCase: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TestCase",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      model: {
        serializedName: "model",
        required: true,
        type: {
          name: "String"
        }
      },
      messages: {
        serializedName: "messages",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TestCaseMessage"
            }
          }
        }
      }
    }
  }
};

export const TestCaseMessage: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TestCaseMessage",
    modelProperties: {
      message: {
        serializedName: "message",
        required: true,
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
      }
    }
  }
};

export const TestSet: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TestSet",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      versionId: {
        serializedName: "version_id",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Paths1U893W0ApiV1TopicSuggestionsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1U893W0ApiV1TopicSuggestionsGetResponses200ContentApplicationJsonSchema",
    modelProperties: {
      topics: {
        serializedName: "topics",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TopicWithSamples"
            }
          }
        }
      },
      pagination: {
        serializedName: "pagination",
        type: {
          name: "Composite",
          className: "Pagination"
        }
      }
    }
  }
};

export const TopicWithSamples: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TopicWithSamples",
    modelProperties: {
      id: {
        serializedName: "id",
        required: true,
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
      conversationsSample: {
        serializedName: "conversations_sample",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConversationResponse"
            }
          }
        }
      }
    }
  }
};

export const Paths11Gsqt2ApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths11Gsqt2ApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchema",
    modelProperties: {
      topic: {
        serializedName: "topic",
        type: {
          name: "Composite",
          className: "Topic"
        }
      },
      statistics: {
        serializedName: "statistics",
        type: {
          name: "Composite",
          className:
            "Paths1MjxjdtApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchemaPropertiesStatistics"
        }
      }
    }
  }
};

export const Paths1MjxjdtApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchemaPropertiesStatistics: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1MjxjdtApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchemaPropertiesStatistics",
    modelProperties: {
      conversationCount: {
        serializedName: "conversation_count",
        required: true,
        type: {
          name: "Number"
        }
      },
      userMessageCount: {
        serializedName: "user_message_count",
        required: true,
        type: {
          name: "Number"
        }
      },
      assistantMessageCount: {
        serializedName: "assistant_message_count",
        required: true,
        type: {
          name: "Number"
        }
      },
      meanSentiment: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: -1
        },
        serializedName: "mean_sentiment",
        required: true,
        type: {
          name: "Number"
        }
      },
      meanUserRating: {
        constraints: {
          InclusiveMaximum: 1,
          InclusiveMinimum: -1
        },
        serializedName: "mean_user_rating",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Paths1TzwckqApiV1TopicSuggestionsIdConversationsGetResponses200ContentApplicationJsonSchema: coreClient.CompositeMapper = {
  type: {
    name: "Composite",
    className:
      "Paths1TzwckqApiV1TopicSuggestionsIdConversationsGetResponses200ContentApplicationJsonSchema",
    modelProperties: {
      conversations: {
        serializedName: "conversations",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ConversationResponse"
            }
          }
        }
      },
      pagination: {
        serializedName: "pagination",
        type: {
          name: "Composite",
          className: "Pagination"
        }
      }
    }
  }
};
