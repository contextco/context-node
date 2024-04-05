export const PathsPixtmzApiV1ConversationsSeriesGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsPixtmzApiV1ConversationsSeriesGetResponses200ContentApplicationJsonSchema",
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
export const Paths1AqjttjApiV1ConversationsSeriesSentimentGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1AqjttjApiV1ConversationsSeriesSentimentGetResponses200ContentApplicationJsonSchema",
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
export const SeriesItem = {
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
export const PathsXq2NqjApiV1ConversationsSeriesRatingGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsXq2NqjApiV1ConversationsSeriesRatingGetResponses200ContentApplicationJsonSchema",
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
export const Paths1J9XfjaApiV1ConversationsSeriesEstimatedCostGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1J9XfjaApiV1ConversationsSeriesEstimatedCostGetResponses200ContentApplicationJsonSchema",
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
export const Paths1Ola7DlApiV1ConversationsSeriesVolumeGetResponses200ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1Ola7DlApiV1ConversationsSeriesVolumeGetResponses200ContentApplicationJsonSchema",
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
export const Pagination = {
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
export const VersionRunParams = {
    type: {
        name: "Composite",
        className: "VersionRunParams",
        modelProperties: {
            testSetName: {
                serializedName: "test_set_name",
                required: true,
                type: {
                    name: "String"
                }
            },
            version: {
                serializedName: "version",
                required: true,
                type: {
                    name: "Number"
                }
            },
            iterations: {
                defaultValue: 1,
                serializedName: "iterations",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
export const Paths2XppqwApiV1EvaluationsRunPostResponses202ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths2XppqwApiV1EvaluationsRunPostResponses202ContentApplicationJsonSchema",
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
                    className: "Paths14Bf6A5ApiV1EvaluationsRunPostResponses202ContentApplicationJsonSchemaPropertiesData"
                }
            }
        }
    }
};
export const Paths14Bf6A5ApiV1EvaluationsRunPostResponses202ContentApplicationJsonSchemaPropertiesData = {
    type: {
        name: "Composite",
        className: "Paths14Bf6A5ApiV1EvaluationsRunPostResponses202ContentApplicationJsonSchemaPropertiesData",
        modelProperties: {
            runId: {
                serializedName: "run_id",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const EvaluationsRunResponse = {
    type: {
        name: "Composite",
        className: "EvaluationsRunResponse",
        modelProperties: {
            id: {
                serializedName: "id",
                required: true,
                type: {
                    name: "String"
                }
            },
            status: {
                serializedName: "status",
                required: true,
                type: {
                    name: "String"
                }
            },
            progress: {
                serializedName: "progress",
                type: {
                    name: "Composite",
                    className: "EvaluationsRunResponseProgress"
                }
            },
            startedAt: {
                serializedName: "started_at",
                type: {
                    name: "DateTime"
                }
            },
            details: {
                serializedName: "details",
                type: {
                    name: "Composite",
                    className: "EvaluationsRunResponseDetails"
                }
            },
            results: {
                serializedName: "results",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "TestCaseRun"
                        }
                    }
                }
            }
        }
    }
};
export const EvaluationsRunResponseProgress = {
    type: {
        name: "Composite",
        className: "EvaluationsRunResponseProgress",
        modelProperties: {
            completed: {
                serializedName: "completed",
                type: {
                    name: "Number"
                }
            },
            pending: {
                serializedName: "pending",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
export const EvaluationsRunResponseDetails = {
    type: {
        name: "Composite",
        className: "EvaluationsRunResponseDetails",
        modelProperties: {
            testSetName: {
                serializedName: "test_set_name",
                type: {
                    name: "String"
                }
            },
            version: {
                serializedName: "version",
                type: {
                    name: "Number"
                }
            }
        }
    }
};
export const TestCaseRun = {
    type: {
        name: "Composite",
        className: "TestCaseRun",
        modelProperties: {
            iteration: {
                serializedName: "iteration",
                type: {
                    name: "Number"
                }
            },
            testCase: {
                serializedName: "test_case",
                type: {
                    name: "Composite",
                    className: "TestCaseDetails"
                }
            },
            evaluations: {
                serializedName: "evaluations",
                required: true,
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Evaluation"
                        }
                    }
                }
            }
        }
    }
};
export const TestCaseDetails = {
    type: {
        name: "Composite",
        className: "TestCaseDetails",
        modelProperties: {
            name: {
                serializedName: "name",
                required: true,
                type: {
                    name: "String"
                }
            },
            input: {
                serializedName: "input",
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
            },
            output: {
                serializedName: "output",
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
export const TestCaseMessage = {
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
export const Evaluation = {
    type: {
        name: "Composite",
        className: "Evaluation",
        modelProperties: {
            evaluatorName: {
                serializedName: "evaluator_name",
                required: true,
                type: {
                    name: "String"
                }
            },
            outcome: {
                serializedName: "outcome",
                required: true,
                type: {
                    name: "String"
                }
            },
            reasoning: {
                serializedName: "reasoning",
                type: {
                    name: "String"
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
            },
            feedback: {
                serializedName: "feedback",
                type: {
                    name: "String"
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
export const Paths1S2Rf6XApiV1LogConversationThreadPostRequestbodyContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "Paths1S2Rf6XApiV1LogConversationThreadPostRequestbodyContentApplicationJsonSchema",
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
export const Thread = {
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
            },
            feedback: {
                serializedName: "feedback",
                type: {
                    name: "String"
                }
            }
        }
    }
};
export const PathsDo7Pm8ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchema = {
    type: {
        name: "Composite",
        className: "PathsDo7Pm8ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchema",
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
                    className: "Paths1O34Sy5ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchemaPropertiesData"
                }
            }
        }
    }
};
export const Paths1O34Sy5ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchemaPropertiesData = {
    type: {
        name: "Composite",
        className: "Paths1O34Sy5ApiV1LogConversationThreadPostResponses201ContentApplicationJsonSchemaPropertiesData",
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
export const TestSet = {
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
            },
            evaluators: {
                serializedName: "evaluators",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Evaluator"
                        }
                    }
                }
            }
        }
    }
};
export const TestCase = {
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
                type: {
                    name: "String"
                }
            },
            modelConfig: {
                serializedName: "model_config",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
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
            },
            pregeneratedResponse: {
                serializedName: "pregenerated_response",
                type: {
                    name: "String"
                }
            },
            evaluators: {
                serializedName: "evaluators",
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Evaluator"
                        }
                    }
                }
            }
        }
    }
};
export const Evaluator = {
    type: {
        name: "Composite",
        className: "Evaluator",
        modelProperties: {
            evaluator: {
                serializedName: "evaluator",
                type: {
                    name: "String"
                }
            },
            options: {
                serializedName: "options",
                type: {
                    name: "Dictionary",
                    value: { type: { name: "any" } }
                }
            }
        }
    }
};
export const TestSetParams = {
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
            version: {
                serializedName: "version",
                required: true,
                type: {
                    name: "Number"
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
//# sourceMappingURL=mappers.js.map