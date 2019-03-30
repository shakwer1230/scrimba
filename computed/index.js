var app=new Vue({
    el:'#app',
    data:{
        message:'hello vue',
    },
    computed:{
         // 计算属性的 getter
         comReversedMessage:function(){
             console.log('comReversedMessage.computed')
            return this.message.split('').reverse().join('')
        },
        comnow:function(){
            return  Date().now
        }
    },
    methods:{
        //方法
        reversedMessage:function(){
            console.log('reversedMessage.method')
            return this.message.split('').reverse().join('')
        },
        nowtime:function(){
            return  Date().now
        }
    }
})