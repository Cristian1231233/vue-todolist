

const app = new Vue({
    el:'#app',
    data:{
        toboList:[
            {
                text: 'Ripassare HTML/CSS',
                done: ''
            },
            {
                text: 'Ripassare HTML/CSS',
                done: ''
            },
            {
                text: 'Ripassare HTML/CSS',
                done: ''
            },
            {
                text: 'Ripassare HTML/CSS',
                done: ''
            },
        ],
        stringaTobo:''
    },
    methods:{
        removeItem(index){
            console.log(index);
            this.toboList.splice(index, 1);
        },
        inserireItemTobo(){
            this.toboList.push(this.stringaTobo);
            console.log(this.stringaTobo);
            
        }
    }

});