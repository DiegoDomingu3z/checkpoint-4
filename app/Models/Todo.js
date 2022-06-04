


export class Todo{
    constructor(data){
        this.id = data.id
        this.completed = data.completed || false
        this.description =  data.description
    }


    get Template(){
return `
<div class="bg-light text-dark ">
<div>
  ${this.description} 
  </div>
  <div onclick="app.todoController.deleteTodo('${this.id}')">   <i class="mdi mdi-trash-can" ></i></div>

</div>

`

    }


}