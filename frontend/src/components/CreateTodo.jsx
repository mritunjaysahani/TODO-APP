import { useState } from "react";

export default function CreateTodo({ addTodo }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>

      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <br />

      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <br />

      <button
        onClick={() => {
          addTodo(title, description);
          fetch("http://localhost:3000/addTodo",{
            method:"POST",
            body:{
              title:title,
              description:description
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
            })  
        }}
      >
        Add a Todo
      </button>

    </div>
  );
}