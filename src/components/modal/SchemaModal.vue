<template>
  <div>
    <div @click.self="$emit('close')" class="modal show" tabindex="-1">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Schema
            </h5>
            <a @click="$emit('close')" class="close">
              <span aria-hidden="true">&times;</span>
            </a>
          </div>
          <div class="modal-body">
            <div class="p-schemaArea">
              <pre><code>{{modalSchema}}</code></pre>
            </div>
          </div>
          <div class="modal-footer">
            <a @click="$emit('close')" class="btn btn-secondary" tabindex="">Close</a>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop fade show" />
  </div>
</template>

<script>

export default {
  props: {
    modalSchema: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  async mounted() {
  },
  methods: {
    inputClass(key) {
      return {
        'is-invalid': this.$v.form[key].$dirty && this.$v.form[key].$invalid,
        'form-control': true
      }
    },
    async loadRepos() {
      this.reposList = await this.listRepos({
        org: this.form.org,
        keyword: this.form.keyword
      })
    },
    submitRepo(repo) {
      this.$emit('submit', repo)
    }
  }
}
</script>

<style scoped>
  .modal{
    display: block;
  }
  .p-schemaArea{
    max-height: 500px;
    overflow: scroll;
  }
</style>
