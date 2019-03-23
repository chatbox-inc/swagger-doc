// https://swagger.io/specification/#responseObject
import _ from 'lodash'
import schemaExample from './schemaExample.js'

// fill responses.{code}.content.{mime}.example
export default (operation) => {
  const response = _.cloneDeep(operation.responses)
  for(let key of Object.keys(response)) {
    if(
      !hasExample(response[key]) &&
      hasExamples(response[key])
    ) {
      response[key].example = response[key].examples[0]
    } else if(
      !hasExample(response[key]) &&
      !hasExamples(response[key]) &&
      hasSchema(response[key])
    ) {
      response[key].example = schemaExample(response[key].content["application/json"].schema)
    }
  }
  return response
}


const hasExample = (content) => {
  return !! content.example
}

const hasExamples = (content) => {
  return content.examples &&
    content.examples.length
}

const hasSchema = (media) => {

  return !! media.content["application/json"].schema
}
