const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'Indirizzi di Posta Eletronica',
            emails: [],
        }
    },
    created() {
        for (let i = 0; i < 10; i++) {
            axios
                .get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp) => {
                    //verifico se effettivamente sto facendo giusto a richiamare col get e il then
                    console.log('la promise ha ottenuto un risultato');
                    //con questo vedo in console la chiave data con all'interno altre due chiavi che sono quelle che mi servono in questo caso
                    console.log(resp.data);
                    //quindi estraggo la mail all'interno 
                    console.log('l\'email presa da data è:', resp.data.response);
                    //ora pusho dentro un array da me prima inizializzato vuoto tutte le email che si vanno a generare
                    this.emails.push(resp.data.response);
                })
        }
    }
}).mount('#app');