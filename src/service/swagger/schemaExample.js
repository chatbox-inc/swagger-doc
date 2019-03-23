// https://swagger.io/specification/#schemaObject

const getObjectExample = (objectSchema) => {
  if(objectSchema.example){
    return objectSchema.example
  }
  const rtn = {}
  for ( let key of Object.keys(objectSchema.properties)){
    if(objectSchema.properties[key].type === "object") {
      rtn[key] = getObjectExample(objectSchema.properties[key])
    }else if(objectSchema.properties[key].example){
      rtn[key] = objectSchema.properties[key].example
    }
  }
  return rtn
}


export default (schema) => {
  if( schema.type === "object") {
    return getObjectExample(schema)
  }
  if( schema.example ) {
    return schema.example
  }
}
