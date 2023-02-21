import React, { useState } from 'react'
import AddTask from './AddTask/AddTask'
import ShowTasks from './ShowTasks/ShowTasks'
import './todo.scss'

const UserContext = React.createContext();

const Todo = () => {


    const [list, setList] = useState([
        {
            id:1,
            todo:'trying list1',
        },
        {
            id:2,
            todo:'trying list2',
        }
    ])

  return (
    <div className='todo center-col'>
        <p className='title'>Got some thing?</p>
        <div className='taskArea'>
            <AddTask list={list} setList={setList} />
            <ShowTasks list={list} setList={setList} />
        </div>
        
    </div>
  )
}

export default Todo