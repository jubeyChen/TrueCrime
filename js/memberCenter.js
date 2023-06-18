Vue.createApp({
    data() {
        return {
            showMemberCenter: false,
            avatar: '',
            preview: false,
            currentTab: 'account',
            name: '',
            gender: 'none',
            shoppingList: []
        }
    },
    methods: {
        logout() {
            localStorage.clear();
            this.showMemberCenter = false;
            window.location.href = 'member.html';
        },
        uploadIMG(e) {
            const file = e.target.files.item(0);
            const reader = new FileReader();
            reader.addEventListener('load', this.avatarLoaded);
            reader.readAsDataURL(file);
        },
        avatarLoaded(e) {
            this.avatar = e.target.result;
            this.preview = true;
        },
        tab(tab) {
            this.currentTab = tab;
        },
        genderChange(e) {
            this.gender = e.target.value;
        },
        nameChange(e) {
            this.name = e.target.value;
        },
        save() {
            localStorage.setItem('name', this.name);
            localStorage.setItem('gender', this.gender);
        },
        getInfo() {
            if (localStorage.getItem('name')) {
                this.name = localStorage.getItem('name');
            }
            if (localStorage.getItem('gender')) {
                this.gender = localStorage.getItem('gender');
            }
        },
        getOrder() {
            if (localStorage.getItem('order')) {
                this.shoppingList = [];
                this.shoppingList = JSON.parse(localStorage.getItem('order'));
            }
        }
    },
    mounted() {
        if (localStorage.getItem('login')) {
            this.showMemberCenter = true;
        } else {
            window.location.href = 'member.html';
        }

        this.getInfo();
        this.getOrder();
    }
}).mount('#app')