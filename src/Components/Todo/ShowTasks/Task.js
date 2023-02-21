import React, { useState, useContext, useEffect, useRef } from 'react'
import {TaskDataContext} from '../../../Context/TaskDataContextProvider'

const Task = ({task}) => {

  const {list, setList} = useContext(TaskDataContext);

  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState(task.todo);

  const inputRef = useRef(null);

  
  

  const handleInput = (e) =>{
    console.log("input changed");
    setInput(e.target.value);
  }

  const updateData = () =>{
    let objIndex = list.findIndex((obj => obj.id == task.id));
    let newArr = [...list]; 
    newArr[objIndex] ={
      id: task.id,
      todo: input,
      complete : false,
    };
    setList(newArr)
    setInput("");
    setShowInput(false);
}

  const cancel = () =>{
    setShowInput(false);
    setInput(task.todo);
    // setInput("");
  }

  const deleteData = () =>{
    let objIndex = list.findIndex((obj => obj.id == task.id));
    let arr = list.filter((item, index) => index !== objIndex);
    setList(arr)
    setInput("");
  }

  const handleTask = () =>{
    let objIndex = list.findIndex((obj => obj.id == task.id));
    let newArr = [...list]; 
    newArr[objIndex] ={
      id: task.id,
      todo: task.todo,
      complete : !task.complete,
    };
    setList(newArr)
  }

  
  useEffect(() => {
    console.log(task)
    setInput(task.todo);
  }, [task])


  useEffect(() => {

    if(showInput)
       inputRef.current.focus()

  }, [showInput])

  return (
    <div className={ `task ${showInput?'center-row ':' flex-row'} ` }>
      { !showInput ?
        <div className='showContainer flex-row'>
          <div className={`taskTitle ${task.complete?'cutLine':''}`} onClick={()=>handleTask()}>
            {task.todo}
          </div>
          <div className='editDelete'>
            <button onClick={()=>setShowInput(true)} className="edit button">edit</button>
            <button onClick={deleteData} className="delete button">delete</button>  
          </div>  
      </div> 
      :
      <div className='updateContainer center-row'>
         <input value={input} onChange={e=>handleInput(e)} className="inputUpdate" ref={inputRef} />
         <button onClick={updateData} className="update button">update</button>
         <button onClick={cancel} className="cancel button">cancel</button>
      </div>
      
      }
      
    </div>
  )
}

export default Task