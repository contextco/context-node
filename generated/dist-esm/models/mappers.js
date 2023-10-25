export const ConversationResponse = {
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
export const Topic = {
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
export const MessageResponse = {
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
export const PathsY5Azv9ApiV1ConversationsGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsY5Azv9ApiV1ConversationsGetResponses200ContentApplicationJsonSchema",
        modelProperties: {
            count: {
                serializedName: "count",
                required: true,
                type: {
                    name: "Number"
                }
            },
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
            }
        }
    }
};
export const PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema",
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
export const Conversation = {
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
export const Message = {
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
export const PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchema",
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
export const Paths1U893W0ApiV1TopicSuggestionsGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1U893W0ApiV1TopicSuggestionsGetResponses200ContentApplicationJsonSchema",
        modelProperties: {
            count: {
                serializedName: "count",
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
                            className: "TopicWithSamples"
                        }
                    }
                }
            }
        }
    }
};
export const TopicWithSamples = {
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
export const Paths11Gsqt2ApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths11Gsqt2ApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchema",
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
                    className: "Paths1MjxjdtApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchemaPropertiesStatistics"
                }
            }
        }
    }
};
export const Paths1MjxjdtApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchemaPropertiesStatistics = {
    type: {
        name: "Composite",
        className: "Paths1MjxjdtApiV1TopicSuggestionsIdStatisticsGetResponses200ContentApplicationJsonSchemaPropertiesStatistics",
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
export const Paths1TzwckqApiV1TopicSuggestionsIdConversationsGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1TzwckqApiV1TopicSuggestionsIdConversationsGetResponses200ContentApplicationJsonSchema",
        modelProperties: {
            count: {
                serializedName: "count",
                required: true,
                type: {
                    name: "Number"
                }
            },
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
            }
        }
    }
};
//# sourceMappingURL=mappers.js.map