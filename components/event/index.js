
Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button v-on:click="$emit('enlarge-text',0.1)">
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
    },
    //第二种方式 使用方法参数接收模板参数 改变大小
    methods:{
      onEnlargeText:function(event){
        debugger
        this.postFontSize+=event;
      }
    }
})
