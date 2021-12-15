import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";

function App() {
  const myStyle={
    minheight:' 80vh',
    margin:"40px, auto",
    // height: '100vh'

}
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div>
      <Navbar />
      <div class="container my-4" style={myStyle}>
      <div class="row">
      <div class="col-sm-6 col-md-6 col-lg-6">
      <AddTodo addTodo={addTodo} />
      </div>
<div class="col-sm-6 col-md-6 col-lg-6">
<Todos todos={todos} onDelete={onDelete} />
</div>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
