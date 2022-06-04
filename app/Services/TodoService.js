import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Todo.js";
import { sandboxApi } from "./AxiosService.js"






class TodoService{

    async getTodo(){
        const res = await sandboxApi.get('diego/todos')
        console.log('getTodo', res.data);
        ProxyState.todo = res.data.map(t => new Todo(t))
    }


    async addTodo(todoData){
        const res = await sandboxApi.post('diego/todos', todoData )
        console.log('adding todo', res.data);
        ProxyState.todo = [...ProxyState.todo, new Todo(res.data)]
    }

    async deleteTodo(id){
        const res = await sandboxApi.delete('diego/todos', id)
        console.log('delete', res.data);
        ProxyState.todo = ProxyState.todo.filter(t => t.id != id)
        ProxyState.todo = ProxyState.todo
    }






}



export const todoService = new TodoService()

