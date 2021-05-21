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
});
var navbar = new Vue({
  el: '#nav',
  data: {
    small:  0,
    big: 0,
  },
  methods: {
    changeSmall: function(){
      content.articles.available = true;
      this.big = 0;
      this.small = 1;
    },
    changeBig: function(){
      content.articles.available = true;
      this.big = 1;
      this.small = 0;
    }
  },
});