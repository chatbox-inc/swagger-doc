<template>
  <div v-if="operation">
    <section class="mb-3">
      <h3 class="mb-3">{{ operation.summary }}</h3>
      <div class="bg-light rounded p-3 mb-3">
        {{method.toUpperCase() }} {{path}}
      </div>
      <div class="text-right mb-3" v-if="operation.security">
        Auth: &nbsp;
        <span
          v-for="(security, index) in operation.security"
          :key="index"
        >
          <span
            class="badge badge-primary"
            v-for="(securityOptions, securityName) in security"
            :key="securityName"
          >{{securityName}}</span>
          &nbsp;
        </span>
      </div>
      <div v-md="operation.description" />
    </section>
    <section>
      <h4>Parameters</h4>
      <div v-if="operation.parameters && operation.parameters.length">
        <table class="table">
          <tr>
            <th>name</th>
            <th>in</th>
            <th>description</th>
            <th></th>
          </tr>
          <tr
            v-for="(param,index) in operation.parameters"
            :key="index"
          >
            <td>{{param.name}}</td>
            <td>{{param.in}}</td>
            <td>{{param.description}}</td>
            <td>
              <a v-if="param.schema" class="btn btn-sm btn-light"
                 @click="openModal(param.schema)" tabindex="">schema</a>
            </td>
          </tr>
        </table>
      </div>
      <div class="bg-light rounded p-3 mb-3" v-else>
        no parameter info
      </div>
    </section>

    <section>
      <h4>Response</h4>
      <section
        v-for="(response,code) in operation.responses"
        :key="code"
      >
        <h5>{{ code }}</h5>
        <p> {{response.description}} </p>
        <div class="bg-light rounded p-3 mb-3" v-if="response.example">
          <pre><code>{{response.example}}</code></pre>
          <div class="text-right">
            <a v-if="response.content['application/json'].schema" class="btn btn-sm btn-light"
               @click="openModal(response.content['application/json'].schema)" tabindex="">schema</a>
          </div>
        </div>
        <div class="bg-light rounded p-3 mb-3" v-else>
          no response example
        </div>
      </section>
    </section>
    <transition name="fade">
      <schema-modal v-if="modalSchema" :modalSchema="modalSchema" @close="modalSchema=null"/>
    </transition>
  </div>
</template>

<script>

import SchemaModal from "@/components/modal/SchemaModal.vue"

export default {
  props:{
    operation:{
      type: Object,
      required: true
    },
    method:{
      type: String,
      required: true
    },
    path:{
      type: String,
      required: true
    },
  },
  components:{
     SchemaModal
  },
  data(){
    return {
      modalSchema: null
    }
  },
  methods: {
    detail(repo){
      this.$router.push("/repos/"+repo.full_name)
    },
    openModal(schema){
      this.modalSchema = schema
    }
  },
}
</script>

<style scoped lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
