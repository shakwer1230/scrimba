var app=new Vue({
    el:'#app',
    data:{
        message:'hello vue.js'
    },
    methods:{
        reverseMessage: function(){
            this.message=this.message.split('').reverse().join('')
        }
    }
})