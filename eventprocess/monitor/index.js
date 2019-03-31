var app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        name: 'Vue.js'
    },
    methods: {
        greet: function (event) {
            // `this` 在方法里指向当前 Vue 实例
            alert('Hello ' + this.name + '!')
            // `event` 是原生 DOM 事件
            if (event) {
                alert(event.target.tagName)
            }
        },
        say: function (message) {
            alert(message)
        },
        warn: function (message, event) {
            debugger
            // 现在我们可以访问原生事件对象
            if (event) event.preventDefault()
            alert(message)
        }
    }
});

