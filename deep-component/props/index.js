Vue.component("blog-post", {
  props: ["postTitle"],
  template: `
    <h3>{{ postTitle }}</h3>
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
