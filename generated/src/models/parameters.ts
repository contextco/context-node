import { OperationParameter, OperationURLParameter } from "@azure/core-client";
import {
  PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema as PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchemaMapper,
  PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchema as PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchemaMapper
} from "../models/mappers";

export const contentType: OperationParameter = {
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

export const body: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchemaMapper
};

export const $host: OperationURLParameter = {
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

export const authorization: OperationParameter = {
  parameterPath: ["options", "authorization"],
  mapper: {
    serializedName: "Authorization",
    type: {
      name: "String"
    }
  }
};

export const body1: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchemaMapper
};
