import Component from './Component'
import List from './List'
import Task from './Task'
import { useState }  from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [theme, setTheme] = useState("blue")
  
  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }
  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }
  function changeTheme() {
    setTheme(() => "green")
  }
  return (
    <div className="App">
      <h1>P{theme}</h1>
      <button onClick={decrementCount}>-</button>
      {count}
      <button onClick={incrementCount}>+</button>
      <button onClick={changeTheme}>theme</button>
    </div>
  );
}

export default App;
