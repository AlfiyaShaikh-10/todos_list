import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Footer from './Footer';
import React, { useState } from 'react'


function App() {
  const [todos, setTodos] = useState([
    {
      sno:1,
      name:"go to mall",
      desc:"dfghbjnkm"
    },
    {
      sno:2,
      name:"go to gym",
      desc:"c jk4521"
    },
    {
      sno:3,
      name:"go to mtk",
      desc:"cghu"
    }
  ])
  const onDelete=(todo)=>{
    console.log("i m onDelete",todo)
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  return (
    <div>
    <Navbar/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </div>
  );
}

export default App;
