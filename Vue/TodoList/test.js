var list = new Vue({
    el: "#list",
    data: {
        selectedIndex: null,
        isEditing: false,
        todo: '',
        todos: [
            'Hehe1',
            'hehe2',

        ]
    },
    methods: {
        storeTodo: function(){
            this.todos.push(this.todo)
            this.todo = ''
        },
        editTodo(index, todo){
            this.todo = todo
            this.selectedIndex = index
            this.isEditing = true
        },
        updateTodo(){
            this.todos.splice(this.selectedIndex, 1, this.todo)
            this.isEditing = false
        },
        deleteTodo(index){
            this.todos.splice(index, 1)
        }
    },
  });
  