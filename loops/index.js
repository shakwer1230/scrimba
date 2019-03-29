var app=new Vue({
    el:'#app',
    data:{
        todos:[{text:'learn javascript'},{text:'learn vue'},{text:'build something awesome'}]
    }
})
app.todos.push({text:'new item'})