import React, {useContext, useEffect} from 'react'
import './showTasks.scss'
import Task from './Task'

import {TaskDataContext} from '../../../Context/TaskDataContextProvider'


const ShowTasks = () => {


 

  const {list} = useContext(TaskDataContext);

  useEffect(() => {
    console.log("list changed");
  
    return () => {
      
    }
  }, [list])
  

  return (
    <div className='showTasks '>

    {list.length==0?<div className='nothing'>Guess you have nothing to do</div>:
      list.map((task) => 
        (
          <Task key={task.id} task={task}/>
        ))
    }
    </div>
  )
}

export default ShowTasks