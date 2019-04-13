Vue.component("blog-post", {
  props: ["title"],
  template: `
    <h3>{{ title }}</h3>
    `
});
var app = new Vue({
  el: "#app",
  data:{
    post:{id:1,title:'dynamic title',author:'james'}
  }
 
});
