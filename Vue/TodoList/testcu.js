var list = new Vue({
    el: "#tolist",
    data: {
        selectedIndex: null,
        isEditing: false,
        currentInput: '',
        lists: [],
    },
    methods: {
        storeList: function(){
            this.lists.push(this.currentInput)
            this.list = ''
        },
        editList(index, listName){
            alert("123")
            this.list = listName
            this.selectedIndex = index
            this.isEditing = true
        },
        updateList(){
            this.lists.splice(this.selectedIndex, 1, this.currentInput)
            this.isEditing = false
        },
        deleteList(index){
            this.lists.splice(index, 1)
        }
    },
  });