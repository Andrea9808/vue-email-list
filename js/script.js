
const { createApp } = Vue;

createApp({

    data(){
        
        return{

            mails: [],
            
        }
    },


    mounted(){

        for(let i = 0; i < 10; i++){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
            this.mails.push(response.data.response)
            });
    
        }
       
    }

}).mount('#app');