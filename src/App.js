
import { useState }  from 'react';
const axios = require('axios');

function App() {
  const [todos, setTodos] = useState(["default"])
  // axios.get('/api')
  // .then(function (response) {
  //   // handle success
  //   // return response.data
  //   return response.data
  //   // console.logs(response.data);
  // })
  // .catch(function (error) {
  //   // handle error
  //   console.log(error);
  // })
  // .then(function (data) {
  //   // always executed
  //   // setTodos((currentForm) => (data))

  // });
  function getData() {
    return axios.get('/api')
  }
  Promise.all([getData()])
  .then(function (results) {
    const data = results[0].data;
    console.log(data)
    return data
  });
  function addToDo() {
    var todo = document.getElementById("form").value
  
    if(todo !== "") {
      setTodos((currTodos) => [...currTodos, todo])
    }
    document.getElementById("form").value = ""
  }
  return (
    <div className="App">
      {/* <Form todos={todos} addToDo={addToDo}/>
      {todos.map(todo => <h1>{todo}</h1>)} */}
    </div>
  );
}

export default App;
