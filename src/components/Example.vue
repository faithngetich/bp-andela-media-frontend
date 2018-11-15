<template>
    <div>
        <div v-if="error">{{ error }}</div>
        <div>
            <input v-model="topic" type="text" class="form-control" placeholder="Topic">
            <input v-model="content" type="text" class="form-control" placeholder="Content">
        </div>
        <button @click="postexample()" class="btn btn-primary">Post</button>

        <div v-for="example in examples" :key="example.id" :example="example">
            <span>{{ example.topic }}</span>
            <span>{{ example.content }}</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'examples',
  data () {
    return {
      examples: [],
      topic: '',
      content: '',
      error: ''
    }
  },

  created () {
    this.$http.axios.get('/examples')
      .then(response => { this.examples = response.data })
      .catch(error => this.setError(error, 'Something went wrong'))
  },

  methods: {
    postexample () {
      this.$http.axios.post('/examples', { topic: this.topic, content: this.content })
        .then(response => {
          localStorage.example = JSON.stringify(response.data)
          this.$router.replace('/example')
        })
    }
  }
}
</script>

<style lang="css">
</style>
