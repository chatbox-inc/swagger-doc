// https://swagger.io/specification/#responseObject
import _ from 'lodash'

const mergeParameters = (operation,parameters) => {
  if(parameters){
    operation.parameters = {
      ... parameters,
      ... operation.parameters
    }
  }
  return operation

}

// fill responses.{code}.content.{mime}.example
export default (swagger, {method,path}) => {
  console.log(path)
  const parameters = swagger.paths[path].parameters
  if(method){
    return mergeParameters(swagger.paths[path][method],parameters)
  }else{
    const rtn = {}
    for(let key of Object.keys(swagger.paths[path])){
      if(key === 'parameters'){
        continue
      }
      rtn[key] = mergeParameters(swagger.paths[path][key],parameters)
    }
    return rtn
  }
}


