import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {

    const todo: Todo = response.data;
    
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    console.log(`Id: ${id}\nTitle: ${title}\nIs it done: ${completed}`)


})