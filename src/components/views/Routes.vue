<template>
  <div v-if="operations">
    <div class="mb-5">
      <h2>{{ path }}</h2>
    </div>
    <div
      class="mb-5"
      v-for="(operation,method) in operations"
      :key="method"
    >
      <swagger-operation
        :operation="operation"
        :method="method"
        :path="path"
      />
    </div>
  </div>
</template>

<script>
  import SwaggerOperation from '@/components/swagger/Operation.vue'

  export default {
    components: {
      SwaggerOperation
    },
    computed:{
      operations(){
        return this.$store.getters.operations({
          path: this.path,
        })
      },
      path() {
        return '/'+this.$route.params.pathMatch
      }
    },
    mounted(){
    },
    methods: {
      detail(repo){
        this.$router.push("/repos/"+repo.full_name)
      },
      presentActionSheet() {
      },
    },
  }
</script>
