//console.log('hello world');

const { createApp } = Vue
createApp({
    data() {
        return {
            randomListUserEmail:[],
        }
    },
    methods: {
        getUserEmail(){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response)=>{
                //console.log(response);
                this.randomListUserEmail.push(response.data.response)
    
                //console.log(this.randomListUserEmail);
            })
        },
    },
    mounted(){
        //console.log(this.randomListUserEmail);
       for (let i = 0; i < 10; i++) {
        this.getUserEmail();
        
       };
       //console.log(this.randomListUserEmail);
       //this.getUserEmail()
    }
}).mount('#app')