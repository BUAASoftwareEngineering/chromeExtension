app = new Vue({
    el: '#app',
    data: {
        langList: [
            {
                value: 'python',
                label: 'Python 3'
            },
            {
                value: 'cpp',
                label: 'C++'
            },
        ],
        model1: 'python',
        langChosen: 'python',
    },
    methods: {
        clickButton: function () {
            let language = this.langChosen;
            console.log("URL params:", language);
            let url = 'http://114.116.135.181/#/draft?language='+language;
            window.open(url, "_blank");
        },
        handleSelect: function (value) {
            this.langChosen = value;
        },
    }
});
