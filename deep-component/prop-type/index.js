Vue.component("blog-post", {
  props: ["title",'likes','is-published','commentids','author'],
  template: `
    <div>
    <h3>{{ title }}</h3>
    <ul>
     <li v-for="item in commentids">{{item}}</li>
    </ul>
    <p>liked by {{likes}} people</p>
    <p>{{author}}</p>
    </div>
    `
});
var app = new Vue({
  el: "#app",
  data: {
    message: "hello vue",
    bar: "id",
    value: "123",
    someattr: "href"
  }
});
