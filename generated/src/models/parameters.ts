import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter
} from "@azure/core-client";
import {
  PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchema as PathsLi5TynApiV1LogConversationPostRequestbodyContentApplicationJsonSchemaMapper,
  PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchema as PathsRai0VpApiV1LogConversationUpsertPostRequestbodyContentApplicationJsonSchemaMapper,
  Paths1S2Rf6XApiV1LogConversationThreadPostRequestbodyContentApplicationJsonSchema as Paths1S2Rf6XApiV1LogConversationThreadPostRequestbodyContentApplicationJsonSchemaMapper
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

export const tenantId: OperationQueryParameter = {
  parameterPath: ["options", "tenantId"],
  mapper: {
    serializedName: "tenant_id",
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

export const period: OperationQueryParameter = {
  parameterPath: ["options", "period"],
  mapper: {
    serializedName: "period",
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

export const page: OperationQueryParameter = {
  parameterPath: ["options", "page"],
  mapper: {
    serializedName: "page",
    type: {
      name: "Number"
    }
  }
};

export const perPage: OperationQueryParameter = {
  parameterPath: ["options", "perPage"],
  mapper: {
    serializedName: "per_page",
    type: {
      name: "Number"
    }
  }
};

export const tenantId1: OperationQueryParameter = {
  parameterPath: ["options", "tenantId"],
  mapper: {
    serializedName: "tenant_id",
    type: {
      name: "Number"
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

export const body2: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: Paths1S2Rf6XApiV1LogConversationThreadPostRequestbodyContentApplicationJsonSchemaMapper
};
