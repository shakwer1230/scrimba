
Vue.component('alert-box',{
    template:`
    <div class="demo-alert-box">
        <strong>Error!</strong>
        <slot></slot>
    </div>
    `
})

var app=new Vue({
    el:'#app'
   
})
