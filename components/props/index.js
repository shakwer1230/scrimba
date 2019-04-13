
Vue.component('blog-post', {
    props: ['post'],
    template:
        `<div class="blog-post">
    <h3>{{ post.title }}</h3>
    <div v-html="post.content"></div>
    </div>`
})

var app = new Vue({
    el: '#app',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue', content: "this is a content" },
            { id: 2, title: 'Blogging with Vue', content: "this is a content" },
            { id: 3, title: 'Why Vue is so fun', content: "this is a content" }
        ]
    }
})
