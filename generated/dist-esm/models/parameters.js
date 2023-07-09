import { PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema as PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchemaMapper, PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchema as PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchemaMapper } from "../models/mappers";
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
export const body1 = {
    parameterPath: ["options", "body"],
    mapper: PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchemaMapper
};
//# sourceMappingURL=parameters.js.map