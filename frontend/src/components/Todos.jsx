const Todos = ({ todos }) => {
  return (
    <div>
      {todos && todos.map(function(todo, index) {
        return (
          <div key={index}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            <button >
              {todo.completed ? "Completed" : "Mark as Complete"}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Todos;