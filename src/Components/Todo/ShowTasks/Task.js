import React, { useState } from 'react'

const Task = ({task, list, setList}) => {

  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState(task.todo);

  const updateData = () =>{
    let objIndex = list.findIndex((obj => obj.id == task.id));
    let newArr = [...list]; 
    newArr[objIndex] ={
      id: task.id,
      todo: input
    };
    setList(newArr)
    setInput("");
    setShowInput(false);
}

  const cancel = () =>{
    setShowInput(false);
    // setInput("");
  }

  const deleteData = () =>{
    let objIndex = list.findIndex((obj => obj.id == task.id));
    let arr = list.filter((item, index) => index !== objIndex);
    setList(arr)
    setInput("");
  }

  return (
    <div className={ `task ${showInput?'center-row ':' flex-row'} ` }>
      { !showInput ?
        <div className='showContainer flex-row'>
          <div className='taskTitle'>
            {task.todo}
          </div>
          <div className='editDelete'>
            <button onClick={()=>setShowInput(true)} className="edit button">edit</button>
            <button onClick={deleteData} className="delete button">delete</button>  
          </div>  
      </div> 
      :
      <div className='updateContainer center-row'>
         <input value={input} onChange={e=>setInput(e.target.value)} className="inputUpdate" />
         <button onClick={updateData} className="update button">update</button>
         <button onClick={cancel} className="cancel button">cancel</button>
      </div>
      
      }
      
    </div>
  )
}

export default Task