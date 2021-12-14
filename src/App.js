

import React, { useState, useEffect } from 'react';
import {Button}  from './Styles/Button.style'
import {AppContainer}  from './Styles/App.style'
import Form from './Components/Form'
import List from './Components/List'
const axios = require('axios');

function App() {
  const [todos, setTodos] = useState(["default"])
  const [color, setColor] = useState("white")
  const [count, setCount] = useState(0)

  useEffect(async () => {
    const result = await axios(
      '/api',
    );
    setTodos(result.data);
  });

  function increaseCount() {
    setCount(count + 1)
  }
  function addToDo() {
    var todo = document.getElementById("form").value
    
    if(todo !== "") {
      setTodos((currTodos) => [...currTodos, todo])
    }
    document.getElementById("form").value = ""
  }
  return (
    <AppContainer backgroundColor="white">
      <Button backgroundColor="pink" onClick={increaseCount}>Click {count} Button</Button>
      <Form/>
      <List/>
    </AppContainer>
  );
}

export default App;
