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
           const childrens = Array.from(e.target.parentElement.children)
           childrens.forEach((elt, i) => {
                elt.classList.remove('color-link-i')
                i === 0 ? elt.style = 'color: var(--color-second)!important' : null
           })
           e.target.style = 'color: '
           e.target.classList.add('color-link-i')
        },
        setLang: function(){
            switch (this.lang) {
                case 'fr': this.post = fr ; break;
                case 'en': this.post = en; break;
                default: this.post = en; break;
            }
        }
    },
    watch: {
        lang: function() {
            return this.setLang();
        }
    },
    mounted() {
        let navMobile = document.querySelector(".nav-mobile");
    	AOS.init();
        document.querySelector('#preload-img').classList.add('d-none');
        this.setLang();
        this.currentEnterprise = this.post.enterprises?.names[0];
        navMobile.addEventListener("click", function(e){
            if(e.target.nodeName === "A") return navMobile.classList.add('d-none');
        })
        document.querySelector('.nav-close').addEventListener('click', (e) => navMobile.classList.add('d-none'))
        document.querySelector('.options-bars').addEventListener('click', (e) => navMobile.classList.remove('d-none'))
    }

});
app.mount('#pageContent');
