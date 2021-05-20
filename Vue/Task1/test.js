var navbar = new Vue({
  el: "#nav",
  data: {
    home: {
      name: "HOME",
      count: 0,
      available: false,
    },
    projects: {
      name: "PROJECTS",
      count: 0,
      available: false,
    },
    services: {
      name: "SERVICES",
      count: 0,
      available: false,
    },
    contact: {
      name: "CONTACT",
      count: 0,
      available: false,
    },
  },
  methods: {
    chooseOption: function (selectedItem) {
      this.home.count = 0,
      this.projects.count = 0,
      this.services.count = 0,
      this.contact.count = 0,

      this.home.available = false,
      this.projects.available = false,
      this.services.available = false,
      this.contact.available = false,

      selectedItem.count = 1;
      selectedItem.available = true,
      content.choseItem = selectedItem.name;
    },
  },
});

var content = new Vue({
  el: "#content",
  data: {
    choseItem: "?",
  },
});
