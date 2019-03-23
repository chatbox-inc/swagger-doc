// https://swagger.io/specification/#responseObject
import jsonRefs from 'json-refs'
import _ from 'lodash'

export default async (_swagger) => {
  const swagger = _.cloneDeep(_swagger)
  const {resolved} = await jsonRefs.resolveRefs(swagger)
  return resolved
}


