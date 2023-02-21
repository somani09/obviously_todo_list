import React, { } from 'react'
import TaskDataContextProvider from '../../Context/TaskDataContextProvider'
import AddTask from './AddTask/AddTask'
import ShowTasks from './ShowTasks/ShowTasks'
import './todo.scss'

const Todo = () => {

  return (
    <TaskDataContextProvider >
        <div className='todo center-col'>
            <p className='title'>Got some thing?</p>
            <div className='taskArea'>
                <AddTask  />
                <ShowTasks />
            </div>
        </div>
    </TaskDataContextProvider>
  )
}

export default Todo