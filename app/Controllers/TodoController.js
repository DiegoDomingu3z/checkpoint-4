import { ProxyState } from "../AppState.js";
import { todoService } from "../Services/TodoService.js";
import { Pop } from "../Utils/Pop.js";


function _draw(){
    let todo = ProxyState.todo
    let template = ''
    todo.forEach(t => template += t.Template)
    document.getElementById('todo-list').innerHTML = template 
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
            await todoService.deleteTodo(id)
            console.log('deleting');
        } catch (error) {
            console.log(error);
            Pop.toast(error.message,'error')
        }

    }

}