import "./App.css";
import Todolist from "./composant/Todolist";
import Buttonadd from "./composant/Buttonadd";

function App() {
  return (
    <div className="image">
      <div>
        <Buttonadd />
        <Todolist />
      </div>
    </div>
  );
}

export default App;
