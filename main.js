var app = new Vue({
  el: '#app',
  data: {
    todos: [],
newTodoName:"" 
  },
  created:function(){
    if(ocalStorage.getItem("todos")){
      this.todos = JSON.parse(localStorage.getItem("todos"));
    }
  },
  methods:{
    addTodo:function(){
      const newTodo={
        name:this.newTodoName,
        isDone:false
      }; 

      this.todos.unshift(newTodo);

      this.newTodoName="";
   
      this.persistData();
    },
    deleteTodo:function(index){
    this.todos.splice(index, 1);
    
    this.persistData();
    },
    toggleDone:function(index) {
    this.todos[index].isDone = !thistodos[index].isDone;

    this.persistData();this.persistData();
    },
    persistData:function(){
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }
});