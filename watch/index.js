var app = new Vue({
    el: '#app',
    data: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar'
    },
    computed: {
        // 计算属性的 getter
        fullName: {
            get:function () {
                return this.firstName + ' ' + this.lastName
            },
            set:function (newValue) {
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
    },
    // watch: {
    //     firstName: function (val){
    //         this.fullName = val+' '+this.lastName
    //     },
    //     lastName: function (val) {
    //         this.fullName = this.firstName + ' ' + val
    //     }
    // }

})