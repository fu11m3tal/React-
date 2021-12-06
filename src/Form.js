import { useState }  from 'react';

function Form({todos, addToDo}) {
  const [form, setForm] = useState("default")
  function updateForm() {
    var  data = document.getElementById("form").value
    setForm((currentForm) => (data))
  }
  function submitForm() {
    addToDo();
    setForm(() => "")
  }
  
  return (
    <>
      <input id="form" type="text" onChange={updateForm} value={form}/>
      <button onClick= {submitForm}>Add Task</button>
    </>
  );
}

export default Form;
