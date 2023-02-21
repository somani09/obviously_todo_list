import React, { useState } from 'react'
import './addTask.scss'
import  {AiOutlinePlus} from 'react-icons/ai'
const AddTask = ({list, setList}) => {
    const [showInput, setShowInput] = useState(false);
    const [input, setInput] = useState("");

    const addData = () =>{
        setList([...list,{
            id:list.length+1,
            todo: input
        }]);
        setInput("");
        setShowInput(false);
    }

  return (
    <div className='addTask'>
       {!showInput?
        <div className='tapButton ' onClick={()=>setShowInput(prev=>!prev)}> 
        <AiOutlinePlus className='plus' /> <div className="addText"> addTask</div> </div>
        :
        <div className='inputArea flex-row'>
            <input value={input} onChange={e=>setInput(e.target.value)} className="inputBox" />
            <div className='buttonContainer'>
              <button className='add button' onClick={()=>addData()} >add</button>
              <button className='close button' onClick={()=>{setShowInput(prev=>!prev); setInput('')}}>close</button>
            </div>
            
        </div>
        }
    </div>
  )
}

export default AddTask