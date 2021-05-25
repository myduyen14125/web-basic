var list = new Vue({
    el: "#tolist",
    data: {
        selectedIndex: null,
        isEditing: false,
        currentInput: '',
        lists: [ ],
    },
    methods: {
        storeList(){
            //nếu không tìm thấy item trong list = currentInput -> nó đang sai, thì đẩy currentInput vô lists
            if(!this.lists.find(item => item.name === this.currentInput))
            {
                this.lists.push({
                    name: this.currentInput,
                    done: false,
                    count: 0
                })
                this.currentInput = ''
            }
            else{
                alert("Có rồi á á")
            }
            
        },
        beDone(index){
            if(this.lists[index].count % 2 != 0){
                this.lists[index].done = true
            }
            else{
                this.lists[index].done = false
            }
        },
        editList(index, listName){
            this.currentInput = listName
            this.selectedIndex = index
            this.isEditing = true
        },
        updateList(){
            if(!this.lists.find(item => item.name === this.currentInput))
            {
                //alert(this.selectedIndex)
                this.lists[this.selectedIndex]={
                    name: this.currentInput,
                    count: 0,
                    done: false,
                
                }
                this.isEditing = false
            }
            else{
                alert("Có rồi á á")
            }
            
        },
        deleteList(index){
            this.lists.splice(index, 1)
        },
        

    },
  });
  