Vue.component("my-component", {
  props: {
    // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
    propA:Number,
    // 多个可能的类型
    propB:[String, Number],
    // 必填的字符串
    propC:{type:String,required:true},
    // 带有默认值的数字
    propD:{
      type:Number,
      default:100
    },
    // 带有默认值的对象
    propE:{
      type:Object,
       // 对象或数组默认值必须从一个工厂函数获取
      default:function(){
        return{message:'hello'}
      }
    },
    propF:{
      validator:function(value){
        return ['sucess','warning','danger'].indexOf(value)!==-1;
      }
    }
    //当 prop 验证失败的时候，(开发环境构建版本的) Vue 将会产生一个控制台的警告。
  },
  template: `
    <div>
    <h3>{{ title }}</h3>
    <ul>
     <li v-for="item in commentids">{{item}}</li>
    </ul>
    <p>liked by {{likes}} people</p>
    <p>{{author}}</p>
    </div>
    `
});
var app = new Vue({
  el: "#app",
  data: {
    message: "hello vue",
    bar: "id",
    value: "123",
    someattr: "href"
  }
});
