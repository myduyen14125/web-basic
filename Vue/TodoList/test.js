var list = new Vue({
    el: "#list",
    data: {
        selectedIndex: null,
        isEditing: false,
        list: '',
        lists: [

        ]
    },
    methods: {
        storeList: function(){
            this.lists.push(this.list)
            this.list = ''
        },
        editList(index, list){
            this.list = list
            this.selectedIndex = index
            this.isEditing = true
        },
        updateList(){
            this.lists.splice(this.selectedIndex, 1, this.list)
            this.isEditing = false
        },
        deleteList(index){
            this.lists.splice(index, 1)
        }
    },
  });
  