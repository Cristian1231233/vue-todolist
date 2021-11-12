

const app = new Vue({
    el:'#app',
    data:{
        toboList:[
            {
                text: 'Ripassare HTML/CSS',
                done: ''
            },
            {
                text: 'Alzarsi presto la mattina per ripassare',
                done: ''
            },
            {
                text: 'mksnfnfjenfks',
                done: ''
            },
            {
                text: 'kdndndnkdnk',
                done: ''
            },
        ],
        
        stringaTobo: { 
            text:'',
            done:""
        },
                    
                    
    },
    methods:{
        removeItem(index){
            console.log(index);
            this.toboList.splice(index, 1);
        },
        inserireItemTobo(){
            this.toboList.push(this.stringaTobo);
            this.stringaTobo = { 
                text:'',
                done:""
            };
            
        },
    } 

});


