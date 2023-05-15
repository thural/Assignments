import { TodoType } from "../types/types"

export async function getTodos():Promise<TodoType[]> {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await data.json();
    return todos.slice(0, 30)
};

export async function getTodo(id):Promise<TodoType[]> {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const todo = await data.json();
    return todo
};