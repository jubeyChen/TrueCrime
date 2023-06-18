Vue.createApp({
    data() {
        return {
            allReview: [],
            imgUrl: 'image/user/',
            star: 0
        }
    },
    created() {
        fetch('./review.json')
            .then(response => response.json())
            .then(data => {
                this.allReview = data;
            });
    },
    methods: {
        reviewStar(star) {
            this.star = star;
        }
    }
}).mount('.review')