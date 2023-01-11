import ClassBasedComponent from "./components/ClassBasedComponent";
import FunctionBasedComponent from "./components/FunctionBasedComponent";
import Button from "./components/Button";
import "./App.css";
import FunctionBased from "./components/FunctionBasedCounter";
import ClassBasedCounter from "./components/ClassBasedCounter";

function App() {
  return (
    <div>
      <FunctionBasedComponent />
      <ClassBasedComponent />
      <Button text="Basava" />
      <FunctionBased />
      <ClassBasedCounter />
    </div>
  );
}

export default App;
