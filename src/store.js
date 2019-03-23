// Base dependencies
import Vue from 'vue'
import Vuex from 'vuex'

import operation from '@/service/swagger/operation'
import response from '@/service/swagger/response'
import resolve from '@/service/swagger/resolve'


// Enable the ionic-vue router plugin
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    swagger: null,
    swaggerResolved: null,
  },
  mutations: {
    SET(state, swagger) {
      state.swagger = swagger
    },
    RESOLVED(state, swagger) {
      state.swaggerResolved = swagger
    },
  },
  getters: {
    operations: (state) => ({path}) => {
      if(state.swaggerResolved){
        const swagger = state.swaggerResolved
        const opes =  operation(swagger, {path})
        for(let method in opes){
          if(opes[method].responses){
            opes[method].responses = response(opes[method])
          }
        }
        return opes
      }
      return null
    },
    operation: (state) => ({method,path}) => {
      if(state.swaggerResolved){
        const swagger = state.swaggerResolved
        const ope =  operation(swagger, {method,path})
        ope.responses = response(ope)
        return ope
      }
      return null
    }
  },
  actions: {
    async fetch({commit}) {
      const res = await fetch(window.swaggerUrl)
      const swagger = await res.json()
      console.log(swagger)
      commit('SET', swagger)
      commit('RESOLVED', await resolve(swagger))

    },
  }
})
