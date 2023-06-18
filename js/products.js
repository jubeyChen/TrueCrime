Vue.createApp({
    data() {
        return {
            imgUrl: 'image/products/',
            productList: [],
            selectedCategory: "all",
            amount: 1,
            shoppingList: []
        }
    },
    methods: {
        currency(price) {
            return Number(price).toLocaleString();
        },


        UpdateAmount(e, item) {
            item.order = e.target.value;
        },

        addToCart(item) {
            if (localStorage.getItem('login')) {
                //找找看是否有相同商品
                const existingItemIndex = this.shoppingList.findIndex((existingItem) => existingItem.title === item.title);

                if (existingItemIndex > -1) {
                    // 商品已存在於購物車，更新購買數量
                    this.shoppingList[existingItemIndex].order = item.order;
                } else {
                    // 商品不存在於購物車，新增商品
                    this.shoppingList.push(item);
                }

                if (localStorage.getItem("shoppingArr")) {
                    const storedShoppingList = JSON.parse(localStorage.getItem("shoppingArr"));
                    const storedItemIndex = storedShoppingList.findIndex((storedItem) => storedItem.title === item.title);

                    if (storedItemIndex > -1) {
                        // 商品已存在於 localStorage，更新購買數量
                        storedShoppingList[storedItemIndex].order = item.order;
                    } else {
                        // 商品不存在於 localStorage，新增商品
                        storedShoppingList.push(item);
                    }

                    this.shoppingList = storedShoppingList;
                }

                localStorage.setItem("shoppingArr", JSON.stringify(this.shoppingList));
                alert('已加入購物車');
            } else {
                alert('請先登入會員方才購買商品。');
            }
        }
    },
    computed: {
        filteredProductList() {
            if (this.selectedCategory === "all") {
                return this.productList;
            } else {
                return this.productList.filter(
                    (item) => item.category === this.selectedCategory
                );
            }
        }
    },
    created() {
        fetch('./products.json')
            .then(response => response.json())
            .then(data => {
                this.productList = data;
            });
    }

}).mount('.product');
