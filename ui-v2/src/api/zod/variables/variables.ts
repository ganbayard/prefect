/**
 * Generated by orval v7.6.0 🍺
 * Do not edit manually.
 * Prefect Prefect REST API
 * OpenAPI spec version: 0.1.0
 */
import {
  z as zod
} from 'zod';


/**
 * Create a variable.

For more information, see https://docs.prefect.io/v3/develop/variables.
 * @summary Create Variable
 */
export const createVariableVariablesPostHeader = zod.object({
  "x-prefect-api-version": zod.string().optional()
})

export const createVariableVariablesPostBodyNameMax = 255;


export const createVariableVariablesPostBody = zod.object({
  "name": zod.string().max(createVariableVariablesPostBodyNameMax),
  "value": zod.string().or(zod.number()).or(zod.boolean()).or(zod.number()).or(zod.object({

})).or(zod.array(zod.any())).or(zod.null()),
  "tags": zod.array(zod.string()).optional()
})

/**
 * @summary Read Variable
 */
export const readVariableVariablesIdGetParams = zod.object({
  "id": zod.string().uuid()
})

export const readVariableVariablesIdGetHeader = zod.object({
  "x-prefect-api-version": zod.string().optional()
})

export const readVariableVariablesIdGetResponseNameMax = 255;


export const readVariableVariablesIdGetResponse = zod.object({
  "id": zod.string().uuid(),
  "created": zod.string().datetime().or(zod.null()),
  "updated": zod.string().datetime().or(zod.null()),
  "name": zod.string().max(readVariableVariablesIdGetResponseNameMax),
  "value": zod.string().or(zod.number()).or(zod.boolean()).or(zod.number()).or(zod.object({

})).or(zod.array(zod.any())).or(zod.null()),
  "tags": zod.array(zod.string()).optional()
})

/**
 * @summary Update Variable
 */
export const updateVariableVariablesIdPatchParams = zod.object({
  "id": zod.string().uuid()
})

export const updateVariableVariablesIdPatchHeader = zod.object({
  "x-prefect-api-version": zod.string().optional()
})

export const updateVariableVariablesIdPatchBodyNameMaxOne = 255;


export const updateVariableVariablesIdPatchBody = zod.object({
  "name": zod.string().max(updateVariableVariablesIdPatchBodyNameMaxOne).or(zod.null()).optional(),
  "value": zod.string().or(zod.number()).or(zod.boolean()).or(zod.number()).or(zod.object({

})).or(zod.array(zod.any())).or(zod.null()).optional(),
  "tags": zod.array(zod.string()).or(zod.null()).optional()
})

/**
 * @summary Delete Variable
 */
export const deleteVariableVariablesIdDeleteParams = zod.object({
  "id": zod.string().uuid()
})

export const deleteVariableVariablesIdDeleteHeader = zod.object({
  "x-prefect-api-version": zod.string().optional()
})

/**
 * @summary Read Variable By Name
 */
export const readVariableByNameVariablesNameNameGetParams = zod.object({
  "name": zod.string()
})

export const readVariableByNameVariablesNameNameGetHeader = zod.object({
  "x-prefect-api-version": zod.string().optional()
})

export const readVariableByNameVariablesNameNameGetResponseNameMax = 255;


export const readVariableByNameVariablesNameNameGetResponse = zod.object({
  "id": zod.string().uuid(),
  "created": zod.string().datetime().or(zod.null()),
  "updated": zod.string().datetime().or(zod.null()),
  "name": zod.string().max(readVariableByNameVariablesNameNameGetResponseNameMax),
  "value": zod.string().or(zod.number()).or(zod.boolean()).or(zod.number()).or(zod.object({

})).or(zod.array(zod.any())).or(zod.null()),
  "tags": zod.array(zod.string()).optional()
})

/**
 * @summary Update Variable By Name
 */
export const updateVariableByNameVariablesNameNamePatchParams = zod.object({
  "name": zod.string()
})

export const updateVariableByNameVariablesNameNamePatchHeader = zod.object({
  "x-prefect-api-version": zod.string().optional()
})

export const updateVariableByNameVariablesNameNamePatchBodyNameMaxOne = 255;


export const updateVariableByNameVariablesNameNamePatchBody = zod.object({
  "name": zod.string().max(updateVariableByNameVariablesNameNamePatchBodyNameMaxOne).or(zod.null()).optional(),
  "value": zod.string().or(zod.number()).or(zod.boolean()).or(zod.number()).or(zod.object({

})).or(zod.array(zod.any())).or(zod.null()).optional(),
  "tags": zod.array(zod.string()).or(zod.null()).optional()
})

/**
 * @summary Delete Variable By Name
 */
export const deleteVariableByNameVariablesNameNameDeleteParams = zod.object({
  "name": zod.string()
})

export const deleteVariableByNameVariablesNameNameDeleteHeader = zod.object({
  "x-prefect-api-version": zod.string().optional()
})

/**
 * @summary Read Variables
 */
export const readVariablesVariablesFilterPostHeader = zod.object({
  "x-prefect-api-version": zod.string().optional()
})

export const readVariablesVariablesFilterPostBodyOffsetDefault = 0;
export const readVariablesVariablesFilterPostBodyOffsetMin = 0;


export const readVariablesVariablesFilterPostBody = zod.object({
  "offset": zod.number().min(readVariablesVariablesFilterPostBodyOffsetMin).optional(),
  "variables": zod.object({
  "operator": zod.enum(['and_', 'or_']).optional(),
  "id": zod.object({
  "any_": zod.array(zod.string().uuid()).or(zod.null()).optional()
}).or(zod.null()).optional(),
  "name": zod.object({
  "any_": zod.array(zod.string()).or(zod.null()).optional(),
  "like_": zod.string().or(zod.null()).optional()
}).or(zod.null()).optional(),
  "tags": zod.object({
  "operator": zod.enum(['and_', 'or_']).optional(),
  "all_": zod.array(zod.string()).or(zod.null()).optional(),
  "is_null_": zod.boolean().or(zod.null()).optional()
}).or(zod.null()).optional()
}).or(zod.null()).optional(),
  "sort": zod.enum(['CREATED_DESC', 'UPDATED_DESC', 'NAME_DESC', 'NAME_ASC']).optional(),
  "limit": zod.number().optional()
})

export const readVariablesVariablesFilterPostResponseNameMax = 255;


export const readVariablesVariablesFilterPostResponseItem = zod.object({
  "id": zod.string().uuid(),
  "created": zod.string().datetime().or(zod.null()),
  "updated": zod.string().datetime().or(zod.null()),
  "name": zod.string().max(readVariablesVariablesFilterPostResponseNameMax),
  "value": zod.string().or(zod.number()).or(zod.boolean()).or(zod.number()).or(zod.object({

})).or(zod.array(zod.any())).or(zod.null()),
  "tags": zod.array(zod.string()).optional()
})
export const readVariablesVariablesFilterPostResponse = zod.array(readVariablesVariablesFilterPostResponseItem)

/**
 * @summary Count Variables
 */
export const countVariablesVariablesCountPostHeader = zod.object({
  "x-prefect-api-version": zod.string().optional()
})

export const countVariablesVariablesCountPostBody = zod.object({
  "variables": zod.object({
  "operator": zod.enum(['and_', 'or_']).optional(),
  "id": zod.object({
  "any_": zod.array(zod.string().uuid()).or(zod.null()).optional()
}).or(zod.null()).optional(),
  "name": zod.object({
  "any_": zod.array(zod.string()).or(zod.null()).optional(),
  "like_": zod.string().or(zod.null()).optional()
}).or(zod.null()).optional(),
  "tags": zod.object({
  "operator": zod.enum(['and_', 'or_']).optional(),
  "all_": zod.array(zod.string()).or(zod.null()).optional(),
  "is_null_": zod.boolean().or(zod.null()).optional()
}).or(zod.null()).optional()
}).or(zod.null()).optional()
})

export const countVariablesVariablesCountPostResponse = zod.number()

