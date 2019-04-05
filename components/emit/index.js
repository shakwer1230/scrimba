
Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button v-on:click="$emit('enlarge-text')">
          Enlarge text
        </button>
        <div v-html="post.content"></div>
      </div>
    `
  })
var app=new Vue({
    el:'#app',
    data: {
      posts: [{title:'this is a title ',content:'this is content'}],
      postFontSize: 1
    }
})
