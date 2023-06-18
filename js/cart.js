Vue.createApp({
    data() {
        return {
            shoppingList: [],
            purchaser: '',
            address: '',
            phone: '',
            cardNum: '',
            cardValid: '',
            cardBackNum:''
        }
    },
    methods: {
        getItem() {
            this.shoppingList = JSON.parse(localStorage.getItem("shoppingArr"));
        },
        remove(index) {
            if (confirm('確定要刪除這個商品嗎?') === true) {
                this.shoppingList.splice(index, 1);
                this.updateLocalStorage();
            }
        },
        updateLocalStorage() {
            localStorage.setItem("shoppingArr", JSON.stringify(this.shoppingList));
        },

        buy() {
            if (this.shoppingList === null) {
                alert('您未添加任何商品');
            }else if (this.purchaser === ''|| this.address ==='' || this.phone === '') {
                alert('請填寫完整的寄件資訊');
            } else if (this.cardNum === '' || this.cardValid === '' || this.cardBackNum ==='') {
                alert('請填寫完整的付款資訊');
            }else {
                localStorage.setItem('order', JSON.stringify(this.shoppingList));
                alert('已完成付款，可以至會員中心查看訂單');
                localStorage.removeItem('shoppingArr');
                window.location.href = 'memberCenter.html';
            }
            
        }
    },
    computed: {
        totalCost() {
            if (this.shoppingList !== null) {
                return this.shoppingList.reduce((total, item) => total + item.price * item.order, 0);
            }
        }
    },
    mounted() {
        this.getItem();
    }
}).mount('.cart');