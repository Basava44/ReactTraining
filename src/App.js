import ClassBasedComponent from "./components/ClassBasedComponent";
import FunctionBasedComponent from "./components/FunctionBasedComponent";
import Button from "./components/Button";
import "./App.css";

function App() {
  return (
    <div>
      <FunctionBasedComponent />
      <ClassBasedComponent />
      <Button text="Basava" />
    </div>
  );
}

export default App;
