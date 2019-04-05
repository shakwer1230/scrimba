
Vue.component('custom-input', {
    props: ['searchText'],
    template: `
      <input
        v-bind:value="searchText"
        v-on:input="searchText=$event.target.value"
      >
    `
  })
var app=new Vue({
    el:'#app',
    data: {
      posts: [{title:'this is a title ',content:'this is content'}],
      searchTextsss: ''
    }
})
