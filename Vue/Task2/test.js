var services = new Vue({
  el: "#services",
  data: {
    services: [
      {
        name: "Web Development",
        price: 300,
        available: false,
        count: 0,
      },
      {
        name: "Design",
        price: 400,
        available: false,
        count: 0,
      },
      {
        name: "Intergration",
        price: 250,
        available: false,
        count: 0,
      },
      {
        name: "Training",
        price: 300,
        available: false,
        count: 0,
      },
    ],
    total: 0,
  },
  methods: {
    choose: function (index) {
        this.services[index].count ++;
        if (this.services[index].count % 2 != 0) {
            (this.services[index].available = true),
            (this.total += this.services[index].price);
        }
        else{
            (this.services[index].available = false),
            (this.total -= this.services[index].price); 
        }
    },
  },
});
