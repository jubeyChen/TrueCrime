// $('.accordion').on('click', '.accordion-control', function (e) {
//     e.preventDefault(); //prevent default action of a button 
//     $(this) //get the element the user clicked on
//         .next('.accordion-panel') //select the next accordion panel
//         .slideToggle(); //use slideToggle to show or hide it

// })

// const controlBtn = document.getElementsByClassName('accordion-control');
// let icon = document.getElementsByClassName('fa-chevron-down');

// for (let i = 0; i < controlBtn.length; i++) {
//     controlBtn[i].addEventListener('click', function () {
//         icon[i].classList.toggle('arrow');
//     })
// }

// const btn = document.getElementsByClassName('btn');

// for (let i = 0; i < btn.length; i++) {
//     btn[i].addEventListener('click', function () {
//         btn[i].classList.toggle('-on');
//     })
// }

Vue.createApp({
    data() {
        return {
            detail:''
            
        }
    },
    methods: {
        showDetail(a) {
            if (this.detail !== a) {
                this.detail = a;
            } else {
                this.detail = '';
            }

            let icon = document.querySelector('#'+a);
            icon.classList.toggle('arrow');
            
        }
    },
    mounted() {
    }
}).mount('#app');