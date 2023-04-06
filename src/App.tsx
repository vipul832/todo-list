import "./App.css";
import AddButton from "./components/AddButton";
import AppBar from "./components/AppBar";
import TodoTask from "./components/TodoTask";

function App() {
  return (
    <div className="todo-area shadow position-relative">
      <AppBar />
      <TodoTask />
      <AddButton />
    </div>
  );
}

export default App;
