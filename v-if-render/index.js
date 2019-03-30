var app=new Vue({
    el:'#app',
    data:{
        loginType:'username'
    },
    methods:{
        toggle:function(){
            debugger
            if(this.loginType==='username'){
                this.loginType='email'

            }else{
                this.loginType='username'
            }
        }
    }
})