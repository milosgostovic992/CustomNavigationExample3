const navigation = {

items: document.querySelectorAll('.js-item'),

    init: function() {
        // this.onLoad();
        this.navigationActions();
    },
onLoad: function() {
    document.querySelector('.js-item').classList.add('active');
},
    navigationActions: function() {
        this.items.forEach((item) => {
            item.addEventListener('click', () => {
                const clicked = item;
                this.items.forEach((test) => {
                    test.classList.remove('active');
                });
                clicked.classList.add('active');
            });
        });
    },

}

export default navigation;