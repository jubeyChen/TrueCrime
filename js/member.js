Vue.createApp({
    data() {
        return {
            showMemberCenter: false,
            isValidEmail: true,
            isPasswordMatch: true,
            current_tab: 'login',
            login: {
                email: '',
                password: ''
            },
            register: {
                email: '',
                password: '',
                checkPW: ''
            }
        }
    },
    methods: {
        tab(current_tab) {
            this.current_tab = current_tab;
        },

        checkEmailValidity() {
            // 使用正則表達式檢查email地址的有效性
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.isValidEmail = regex.test(this.register.email);
        },

        PWCheck() {
            this.isPasswordMatch = (this.register.checkPW === this.register.password);
        },

        doLogin() {
            if (
                this.login.email == '123@gmail.com' &&
                this.login.password == '1234') {
                alert('登入成功!');
                localStorage.setItem('login', 1);
                this.showMemberCenter = true;
                window.location.href = 'memberCenter.html';
            }
        }
    },
    mounted() {
        if (localStorage.getItem('login')) {
            this.showMemberCenter = true;
            window.location.href = 'memberCenter.html';
        }
    }
}).mount('#app')