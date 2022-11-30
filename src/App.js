import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import { ListForm } from "./Components/Form";
import { List } from "./Components/List";

function App() {
  const [name, setName] = useState([]);
  const addName = (value) => {
    setName([...name, value]);
  };
  return (
    <div className="App">
      <ListForm addName={addName}></ListForm>
      <hr />
      <List names={name}></List>
    </div>
  );
}

export default App;
