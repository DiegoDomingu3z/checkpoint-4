import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";
import { Pop } from "../Utils/Pop.js";


function _draw(){
    let todo = ProxyState.todo
    let template = ''
    let todoCount = 0
    let total = 0
    todo.forEach(t => {
        template += t.Template
    if(t.completed == true){
        todoCount ++
        
    }
    if(t.completed == false){
        total ++
        
    }
   
})
    document.getElementById('todo-list').innerHTML = template 
    document.getElementById('todo-count').innerText = todoCount +  '/' + todo.length
    document.getElementById('total-todo').innerText = total

}




export class TodoController{
    constructor(){
        console.log('todo controller loaded');
        ProxyState.on('todo', _draw)
        this.getTodo()

    }



    async getTodo(){
        try {
        await todoService.getTodo()
        } catch (error) {
        console.log(error);
        Pop.toast(error.message, 'error')  
        }
    }



   async addTodo(){
    try {
        window.event.preventDefault()
        let form = window.event.target
        let todoData = {
            description: form.description.value
        }
        await todoService.addTodo(todoData)
        form.reset()
        console.log('creating todo');
    } catch (error) {
        console.log(error);
        Pop.toast(error.message, 'error')
    }
    }



    async deleteTodo(id){
        try {
            if (await Pop.confirm('are you sure you want to delete')){

                todoService.deleteTodo(id)
                console.log('deleting');
            }
        } catch (error) {
            console.log(error);
            Pop.toast(error.message,'error')
        }

    }



    async completedTodo(id){
        try {
            await todoService.completedTodo(id)
            console.log('updating');
        } catch (error) {
            console.log(error);
            Pop.toast(error.message,'error')
        }
    }

    
}