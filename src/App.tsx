import "./App.css";
import AddButton from "./components/AddButton";
import AppBar from "./components/AppBar";

function App() {
  return (
    <div className="todo-area shadow position-relative">
      <AppBar />
      <AddButton />
    </div>
  );
}

export default App;
