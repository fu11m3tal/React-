import PropTypes from 'prop-types';
import { useState }  from 'react';

const List = () => {
 const [tasks, setTasks] = useState([
    {
      id: 1, 
      text: "Doctor Appointment",
      reminder: true
    },
    {
      id: 2, 
      text: "Meeting at Work",
      reminder: false
    },
    {
      id: 3, 
      text: "Interview",
      reminder: true
    },
    {
      id: 4, 
      text: "On-Site",
      reminder: true
    }, 
  ])

  return (
    <>
     {tasks.map((task) => (
       <h3>{task.text}</h3>
     ))}
    </>
  )
}

List.defaultProps = {
  data: 11
}

List.propTypes = {
  data: PropTypes.number.isRequired,
}

export default List
