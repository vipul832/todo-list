import "./App.css";
import AppBar from "./components/AppBar";
import TodoTask from "./components/TodoTask";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="todo-area shadow position-relative">
      <Toaster position="top-center" reverseOrder={true} />
      <AppBar />
      <TodoTask />
    </div>
  );
}

export default App;
