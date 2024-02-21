import AddToDo from "./components/addtodo"
import Navbar from "./components/navbar"
import Todos from "./components/todos"
import "./App.css"
import { RiTodoLine } from "react-icons/ri";


const App = () => {
  return (
    <main>
      <h2><RiTodoLine className="icons" /> TODO REACT + TYPESCRIPT <RiTodoLine className="icons" /> </h2>
      <Navbar />
      <AddToDo />
      <Todos />
    </main>
  )
}

export default App