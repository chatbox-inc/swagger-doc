<template>
  <div v-if="operation">
    <swagger-operation
      :operation="operation"
      :method="method"
      :path="path"
    />
  </div>
</template>

<script>
import SwaggerOperation from '@/components/swagger/Operation.vue'

export default {
  components: {
    SwaggerOperation
  },
  computed:{
    operation(){
      return this.$store.getters.operation({
        method: this.$route.params.method,
        path: '/'+this.$route.params.pathMatch,
      })
    },
    method() {
      return this.$route.params.method
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
