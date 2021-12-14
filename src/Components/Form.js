import { useState }  from 'react';

function Form({todos, addToDo}) {
  const [form, setForm] = useState("")
  function updateForm(event) {
    var  input = event.target.value;
    setForm((currentForm) => (input))
  }
  function submitForm() {
    addToDo();
    setForm(() => "")
  }
  const onClick = (event) => {
    
  }
  return (
    <>
      <input id="form" type="text" onChange={updateForm} value={form}/>
      <button onClick={onClick}>Add Task</button>
    </>
  );
}

export default Form;
