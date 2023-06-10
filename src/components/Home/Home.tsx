import "./Home.css";
import React, { useState } from "react";

const Home = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [value, setValue] = useState("");
  type Todo = {
    value: string;
    id: number;
    check: boolean;
  };

  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    // console.log(e.target.value);
  };

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      value: value,
      id: todos.length,
      check: false,
    };
    if (value === "") {
      return;
    }

    setTodos([newTodo, ...todos]);
    setValue("");
  };

  const handleEdit = (id: number, value: string) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.value = value;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handlechecked = (id: number, check: boolean) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.check = !check;
      }
      return todo;
    });

    setTodos(newTodos);
  };

  const handledeleate = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  return (
    <div>
      <h2>TODOリスト</h2>
      <form
        onSubmit={(e) => {
          handlesubmit(e);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            handle(e);
          }}
        ></input>
        <input type="submit" value="作成"></input>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="text"
              onChange={(e) => handleEdit(todo.id, e.target.value)}
              value={todo.value}
              disabled={todo.check}
            ></input>
            <input
              type="checkbox"
              onChange={(e) => handlechecked(todo.id, todo.check)}
            ></input>

            <button onClick={() => handledeleate(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
