import "./App.css";
import AppBar from "./components/AppBar";
import TodoTask from "./components/TodoTask";

function App() {
  return (
    <div className="todo-area shadow position-relative">
      <AppBar />
      <TodoTask />
    </div>
  );
}

export default App;
