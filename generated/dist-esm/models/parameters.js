import { PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema as PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchemaMapper, PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchema as PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchemaMapper, Paths1S2Rf6XApiV1LogConversationThreadPostRequestbodyContentApplicationJsonSchema as Paths1S2Rf6XApiV1LogConversationThreadPostRequestbodyContentApplicationJsonSchemaMapper, TestSetParams as TestSetParamsMapper } from "../models/mappers";
export const accept = {
    parameterPath: "accept",
    mapper: {
        defaultValue: "application/json",
        isConstant: true,
        serializedName: "Accept",
        type: {
            name: "String"
        }
    }
};
export const $host = {
    parameterPath: "$host",
    mapper: {
        serializedName: "$host",
        required: true,
        type: {
            name: "String"
        }
    },
    skipEncoding: true
};
export const authorization = {
    parameterPath: ["options", "authorization"],
    mapper: {
        serializedName: "Authorization",
        type: {
            name: "String"
        }
    }
};
export const tenantId = {
    parameterPath: ["options", "tenantId"],
    mapper: {
        serializedName: "tenant_id",
        type: {
            name: "String"
        }
    }
};
export const startTime = {
    parameterPath: ["options", "startTime"],
    mapper: {
        serializedName: "start_time",
        type: {
            name: "String"
        }
    }
};
export const endTime = {
    parameterPath: ["options", "endTime"],
    mapper: {
        serializedName: "end_time",
        type: {
            name: "String"
        }
    }
};
export const period = {
    parameterPath: ["options", "period"],
    mapper: {
        serializedName: "period",
        type: {
            name: "String"
        }
    }
};
export const id = {
    parameterPath: "id",
    mapper: {
        serializedName: "id",
        required: true,
        type: {
            name: "String"
        }
    }
};
export const page = {
    parameterPath: ["options", "page"],
    mapper: {
        serializedName: "page",
        type: {
            name: "Number"
        }
    }
};
export const perPage = {
    parameterPath: ["options", "perPage"],
    mapper: {
        serializedName: "per_page",
        type: {
            name: "Number"
        }
    }
};
export const tenantId1 = {
    parameterPath: ["options", "tenantId"],
    mapper: {
        serializedName: "tenant_id",
        type: {
            name: "Number"
        }
    }
};
export const contentType = {
    parameterPath: ["options", "contentType"],
    mapper: {
        defaultValue: "application/json",
        isConstant: true,
        serializedName: "Content-Type",
        type: {
            name: "String"
        }
    }
};
export const body = {
    parameterPath: ["options", "body"],
    mapper: PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchemaMapper
};
export const body1 = {
    parameterPath: ["options", "body"],
    mapper: PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchemaMapper
};
export const body2 = {
    parameterPath: ["options", "body"],
    mapper: Paths1S2Rf6XApiV1LogConversationThreadPostRequestbodyContentApplicationJsonSchemaMapper
};
export const body3 = {
    parameterPath: ["options", "body"],
    mapper: TestSetParamsMapper
};
export const copyTestCasesFrom = {
    parameterPath: ["options", "copyTestCasesFrom"],
    mapper: {
        serializedName: "copy_test_cases_from",
        type: {
            name: "String"
        }
    }
};
//# sourceMappingURL=parameters.js.map