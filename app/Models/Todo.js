


export class Todo{
    constructor(data){
        this.id = data.id
        this.completed = data.completed || false
        this.description =  data.description
    }


    get Template(){
return `
<div class="p-3">
<div>
<input class="custom-checkbox checkmark" type="checkbox"  ${this.completed ? 'checked' : ''} onclick="app.todoController.completedTodo('${this.id}')">

  <span class="p-5 text-light">${this.description}</span> 
  <span class="align-items-end" onclick="app.todoController.deleteTodo('${this.id}')"><i class="mdi mdi-trash-can  btn btn-light" ></i></span>
  </div>

</div>

`

    }


}