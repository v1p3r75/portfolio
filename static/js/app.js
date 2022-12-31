/**
 * File : App.js
 * Description : The page's script - VueJS
 * Author : v1p3r75 (KEF)
 */

import en from "./lang/English.js";
import fr from "./lang/French.js";

const app = Vue.createApp({

    data() {

        return {
            currentEnterprise : '',
            lang : 'fr',
            post: [],
        }
    },

    methods: {
        changeEnterprise: function(e) {
            this.currentEnterprise = e.target.innerText;
        }
    },

    mounted() {
    	AOS.init()
        console.log(fr.enterprises)
        document.querySelector('#preload-img').classList.add('d-none')
        switch (this.lang) {
            case 'fr': this.post = fr ; break;
            case 'en': this.post = en; break;
            default: this.post = fr; break;
        }
        this.currentEnterprise = this.post.enterprises?.names[0]
        document.querySelector('.nav-close').addEventListener('click', (e) => document.querySelector('.nav-mobile').classList.add('d-none'))
        document.querySelector('.options-bars').addEventListener('click', (e) => document.querySelector('.nav-mobile').classList.remove('d-none'))
    }

});
app.mount('#pageContent');
