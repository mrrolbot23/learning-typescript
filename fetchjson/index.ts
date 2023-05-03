import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  let finished = todo.completed;

  logTodo(id, title, finished);
});

const logTodo = (id: number, title: string, finished: boolean) => {
  console.log(`
    This todo has an id of ${id}
    The title is "${title}"
    Is it finished? ${finished}
  `);
};
