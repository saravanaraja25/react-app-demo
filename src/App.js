import React, { useState, useEffect } from "react";
import Child from "./Child";
import axios from "axios";

export default function App() {
  const [value, setValue] = useState(0);
  const [todos, setTodos] = useState([]);
  let newValue = 1;
  const increment = () => {
    setValue(value + 1);
  };

  let url = "https://jsonplaceholder.typicode.com/todos";
  const fetchTodos = async () => {
    // to get
    let res = await axios.get(url);

    // to post
    // let res = await axios.post(url, {
    //   id: 1,
    //   title: "Hello World",
    // });

    // to put
    // await axios.put(url, {
    //   id: 1,
    //   title: "Hello World",
    // })

    //  to delete
    // await axios.delete(url, {
    // id: 1
    // })
    setTodos(res.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      Hello world {value} {newValue}
      <Child increment={increment} value={value} />
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {todos &&
        todos.map((todo) => (
          <div key={todo.id}>
            {todo.id}-{todo.title}
          </div>
        ))}
    </div>
  );
}
