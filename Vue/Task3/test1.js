var content = new Vue({
    el: "#content",
    data: {
      articles: [
        {
          title: "What You Need To Know About CSS Variables",
          url: "https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
          img: "https://tutorialzine.com/media/2016/03/css-variables.jpg",
          available: false,
        },
        {
          title: "Freebie: 4 Great Looking Pricing Tables",
          url: "https://tutorialzine.com/2016/02/freebie-4-great-looking-pricing-tables/",
          img: "https://tutorialzine.com/media/2016/02/great-looking-pricing-tables.jpg",
          available: false,
        },
        {
          title: "20 Interesting JavaScript and CSS Libraries for February 2016",
          url: "https://tutorialzine.com/2016/03/what-you-need-to-know-about-css-variables/",
          img: "https://tutorialzine.com/media/2016/02/great-looking-pricing-tables.jpg",
          available: false,
        },
        {
          title: "Quick Tip: The Easiest Way To Make Responsive Headers",
          url: "https://tutorialzine.com/2016/02/quick-tip-easiest-way-to-make-responsive-headers/",
          img: "https://tutorialzine.com/media/2016/02/quick-tip-responsive-headers.png",
          available: false,
        },
      ],
    },
    methods: {
        changeSmall: function(){
            for(let i = 0; i <= 4; i++){
                this.articles[i].available = false;
            }
        },
        changeBig: function(){
            for(let i = 0; i <= 4; i++){
                this.articles[i].available = true;
            }
        }
      },
  });
