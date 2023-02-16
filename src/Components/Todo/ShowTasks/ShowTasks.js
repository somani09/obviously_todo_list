import React from 'react'
import './showTasks.scss'
import Task from './Task'
const ShowTasks = ({list, setList}) => {
  console.log(list)
  return (
    <div className='showTasks '>

      {list.map((task) => 
        (
          <Task key={task.id} task={task} list={list} setList={setList} />
        ))}

    </div>
  )
}

export default ShowTasks