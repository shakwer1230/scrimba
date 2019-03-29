var obj={
    foo:'bar'
},
 app=new Vue({
    el:'#app',
    // data: Object.freeze(obj)//使用了Object.freeze()方法阻止修改现有属性 响应系统无法跟踪变化
    data:obj
   
});
console.log(app.$data) //获取data

console.log(app.$el)

app.$watch('foo',function(newvalue,oldvalue){
    //回调函数 属性改变后调用
    console.log(oldvalue+'->'+newvalue)
})
