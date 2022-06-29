import { client } from './client.js';

export async function getAllTodos() {
    // get all the todos
    const response = await client
        .from('todos')
        .select();

    return response.data;
}

export async function createTodo(todo) {
    // insert a todo
    const response = await client
        .from('todos')
        .insert(todo)
        .single();
    return response.data;
}

export async function updateTodo(todo) {
    // update todo
    const response = await client
        .from('todos')
        .update(todo)
        .match({ id: todo.id })
        .single();

    return response.data;
}

export async function deleteTodo(todo) {
    // delete todo
    const response = await client
        .from('todos')
        .delete()
        .match({ id: todo.id })
        .single();
        
    return response.data;
}