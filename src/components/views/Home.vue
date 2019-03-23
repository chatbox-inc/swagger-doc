<template>
  <div class="container">
    hogehfgeof
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        token: ""
      },
      links: ['Action Sheet', 'Alert', 'Loading', 'Menu', 'Modal'],
    }
  },
  computed:{
  },
  mounted(){
  },
  methods: {
    input(e){
        this.form.token = e.srcElement.value
    },
    async submitLogin(){
      try{
        await this.login(this.form.token)
      }catch (e) {
          return this.$ionic.alertController
              .create({
                  header: 'Invalid Token',
                  message: 'You need use valid token which has scope "repos & delete_repo".',
                  buttons: ['OK'],
              })
              .then(a => a.present())

      }
      this.$router.push("/repos")
    }
  },
}
</script>
