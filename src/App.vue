<template>
  <div id="app">
    <div class="l-container">
      <div class="row">
        <div class="col-3">
          <div class="l-menu">

            <app-menu v-if="swagger" :swagger="swagger"/>

            <div v-if="swagger">
              <br>
              <br>
              <br>
              <br>
              <br>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="l-content">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppMenu from './components/Menu.vue'

export default {
  name: 'app',
  components: {
    AppMenu
  },
  computed:{
    swagger(){
      return this.$store.state.swagger
    }
  },
  async mounted(){
    this.$store.dispatch("fetch")
  }
}
</script>

