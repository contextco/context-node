import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema as PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchemaMapper,
  PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchema as PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchemaMapper
} from "../models/mappers";

export const accept: OperationParameter = {
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

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    type: {
      name: "String"
    }
  }
};

export const startTime: OperationQueryParameter = {
  parameterPath: ["options", "startTime"],
  mapper: {
    serializedName: "start_time",
    type: {
      name: "String"
    }
  }
};

export const endTime: OperationQueryParameter = {
  parameterPath: ["options", "endTime"],
  mapper: {
    serializedName: "end_time",
    type: {
      name: "String"
    }
  }
};

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

export const body1: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchemaMapper
};
