app.component('profile-display', {
    props: {
        isFollowing: {
            type: Boolean,
            required: true
        }
    },
    template:
    `
    <div class="profile-display">
        <div class="profile-container">
          <div class="profile-image">
            <!-- Profile Image goes here -->
            <img v-bind:src="image" alt="my profile image">
          </div>
          <div class="profile-info">
            <h1>{{ name }}</h1>
            <button class="button">Posts: {{ totalPosts }} </button>
            <button class="button">Followers: {{ followers }}</button>
            <button class="button">Following: {{ following }}</button>
            <p>{{ bio }}</p>
            <button class="follow-status">{{status}}</button>

            <h3>Hobbies</h3>
            <ul>
              <li v-for="hobbie in hobbies">{{ hobbie }}</li>
            </ul>


            <post-list v-if="posts.length" :posts="posts"></post-list>
            <post-form @post-submitted="addPost"></post-form>
          </div>
        </div>
      </div>`,
      data() {
        return {
            name: 'Jaykef (苏杰)',
            image: './assets/images/jaykef.jpg',
            bio: 'Hi there! I am Jaykef, a programmer, freelancer and software engineering student at beijing institute of technology.',
            totalPosts: '164',
            followers: '1,105',
            following: '285',
            hobbies: ['Coding', 'Movies', 'Reading', 'Travelling'],
            posts: []
        }
      },
      methods: {
          addPost(post) {
              this.posts.push(post)
          }
      },
      computed: {
          status() {
              if(this.isFollowing) {
                return 'Following'
              } else {
                return 'Follow'
              }
          }
      }
})