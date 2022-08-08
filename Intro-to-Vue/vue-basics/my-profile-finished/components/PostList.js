app.component('post-list', {
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    template:
    `
    <div class="post-container">
    <h3>My Posts:</h3>
        <ul>
            <li v-for="(post, index) in posts" :key="index">
                <h4>{{ post.body }}</h4>
                <br/>
            </li>
        </ul>
    </div>`
})