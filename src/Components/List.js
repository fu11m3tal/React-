import PropTypes from 'prop-types';
import { useState }  from 'react';

const List = () => {
 const [tasks, setTasks] = useState([
    {
      id: 1, 
      title: "Doctor Appointment",
      date: true
    },
    {
      id: 2, 
      title: "Meeting at Work",
      date: false
    },
    {
      id: 3, 
      title: "Interview",
      date: true
    },
    {
      id: 4, 
      title: "On-Site",
      date: true
    }, 
  ])

  return (
    <>
     {tasks.map((task) => (
       <>
        <li key={task.id}>{task.title}</li>
        <span>{task.id}</span>
       </>
     ))}
    </>
  )
}


export default List
