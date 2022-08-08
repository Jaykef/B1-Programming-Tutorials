app.component('post-form', {
    template:
    `<form class="post-form" @submit.prevent="onSubmit">
    <h3>Create a post</h3>    
    <textarea id="body" v-model="body"></textarea>  

    <input class="button" type="submit" value="Submit">  

  </form>`,
  data() {
      return {
          title: '',
          body: ''

      }
  },
  methods: {
      onSubmit() {
          if (this.body == '') {
              alert('Please fill out every field')
              return
          }

          let myPost = {
              body: this.body
          }
          this.$emit('post-submitted', myPost)

          this.body = ''
      }

  }
})