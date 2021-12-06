import Form from './Form'
import List from './List'
import Task from './Task'
import { useState }  from 'react';

function App() {
  const [todos, setTodos] = useState(["default"])
  
  
  function addToDo() {
    var todo = document.getElementById("form").value
  
    if(todo !== "") {
      console.log("tasked")
      setTodos((currTodos) => [...currTodos, todo])
    }
    document.getElementById("form").value = ""
  }
  return (
    <div className="App">
      <Form todos={todos} addToDo={addToDo}/>
      {todos.map(todo => <h1>{todo}</h1>)}
    </div>
  );
}

export default App;
