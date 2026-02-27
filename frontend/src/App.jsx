import './App.css';
import { useState } from "react";
import CreateTodo from './components/CreateTodo';
import Todos from './components/Todos';

function App() {

  const [todos, setTodos] = useState([
    {
      title: "Gym",
      description: "Go to gym at 6am",
      completed: false
    },
    {
      title: "Study",
      description: "Study React",
      completed: true
    }
  ]);

  function addTodo(title, description) {
    setTodos([
      ...todos,
      {
        title: title,
        description: description,
        completed: false
      }
    ]);
  } 
  fetch("http://localhost:3000/getTodos")
  .then(res => res.json())
  .then(data => {
    setTodos(data.todos);
  })
  return (
    <>
      <CreateTodo addTodo={addTodo} />
      <Todos todos={todos}  />
    </>
  )
}

export default App;