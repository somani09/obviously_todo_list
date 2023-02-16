import React, { useState } from 'react'

const Task = ({task, list, setList}) => {

  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState("");

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
    setInput("");
  }

  const deleteData = () =>{
    let objIndex = list.findIndex((obj => obj.id == task.id));
    let arr = list.filter((item, index) => index !== objIndex);
    setList(arr)
    setInput("");
  }

  return (
    <div className="task flex-row" >
      { !showInput ?
        <div>
          <div>
            {task.id} + {task.todo}
          </div>
          <div>
            <button onClick={()=>setShowInput(true)}>edit</button>
            <button onClick={deleteData}>delete</button>  
          </div>  
      </div> 
      :
      <div>
         <input value={input} onChange={e=>setInput(e.target.value)} />
         <button onClick={updateData}>update</button>
         <button onClick={cancel}>cancel</button>
      </div>
      
      }
      
    </div>
  )
}

export default Task