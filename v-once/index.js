var app=new Vue({
    el:'#app',
    data:{
        message:'hello vue'
    }
})
app.message='i want change the value' //使用 v-once指令 改变message值失败