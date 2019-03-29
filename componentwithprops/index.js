Vue.component('todo-item',{
    props:['todo'],
    template:'<li key="{{todo.id}}">{{todo.text}}</li>'
})

var app=new Vue({
    el:'#app',
    data:{
        groceryList:[
            {id:0,text:'vegetable'},
            {id:1,text:'Chese'},
            {id:2,text:'Whatever else human are suppose'}
        ]
    }
})