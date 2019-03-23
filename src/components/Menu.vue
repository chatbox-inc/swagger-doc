<template>
  <div class="hello">

    <form class="form-inline">
      <input type="text" class="m-1 form-control" v-model="text">
    </form>
    <div
      class="c-navLink"
      v-for="(route,path) in routes"
      :key="path">
      <div class="c-navLink__path">
        <a
          class="h5"
          :title="path"
          @click="$router.push(`/paths${path}`)"
        >{{ path }}</a>
      </div>
      <div>
        <div
          class="c-navLink__item"
          @click="$router.push(`/path/${method}${path}`)"
          v-for="(ope,method) in methods(route)" :key="method">
          <span class="badge badge-info" v-if="method === 'get'">GET</span>
          <span class="badge badge-success" v-if="method === 'post'">POST</span>
          <span class="badge badge-primary" v-if="method === 'put'">PUT</span>
          <span class="badge badge-warning" v-if="method === 'patch'">PAT</span>
          <span class="badge badge-danger" v-if="method === 'delete'">DEL</span>
          <span > {{ ope.summary }} </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    swagger:{
      type: Object,
      required: true
    }
  },
  data(){
      return {
        text: ""
      }
  },
  computed:{
    routes() {
      const swagger = this.swagger
      if(swagger) {
        if(this.text === ""){
          return swagger.paths
        }else{
          const routes = {}
          for(let path of Object.keys(swagger.paths)){
            console.log(path, this.text)
            if(path.indexOf(this.text) !== -1){
              routes[path] = swagger.paths[path]
            }
          }
          return routes
        }
      }
      return null
    }
  },
  mounted(){
  },
  methods:{
    methods(route){
      const rtn = {}
      for(let [key,value] of Object.entries(route)){
        if(key === "get" ||
          key === "post" ||
          key === "delete" ||
          key === "patch" ||
          key === "put" ) {
            rtn[key] = value
        }
      }
      return rtn
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .c-navLink{
    margin-bottom: 1em;
    &__path{
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis; /* Opera9,10対応 */
      margin-bottom: .2em;
    }
    &__item{
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis; /* Opera9,10対応 */
    }
  }
</style>
