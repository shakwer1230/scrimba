Vue.component('base-iput', {
  inheritAttrs:false,
  props: ['lable','value'],
  template: `
  <label>
    <input
      v-bind="$attrs"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.checked)"
    >
    </label>
  `,

  computed:{
    inputListeners:function(){
      var vm=this
      return Object.assign({},
        this.$listeners,
        {
          input:function(event){
            vm.$emit('input',event.target.value);
          }
        }
        )
      
    }
  }
});
var app = new Vue({
  el: "#app",
  data:{
    lovingVue:true
  }
});
