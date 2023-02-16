import React, { useState } from 'react'
import './addTask.scss'
const AddTask = ({list, setList}) => {
    const [showInput, setShowInput] = useState(false);
    const [input, setInput] = useState("");

    const addData = () =>{
        setList([...list,{
            id:list.length+1,
            todo: input
        }]);
        setInput("");
    }

  return (
    <div className='addTask'>
       {!showInput?
        <div className='tapButton' onClick={()=>setShowInput(prev=>!prev)}> <>+</> addTask </div>
        :
        <div className='inputArea'>
            <input value={input} onChange={e=>setInput(e.target.value)} />
            <button className='add' onClick={()=>addData()} >add</button>
            <button className='close' onClick={()=>setShowInput(prev=>!prev)}>close</button>
        </div>
        }
    </div>
  )
}

export default AddTask