import React, { useState, useContext, useEffect, useRef } from 'react'
import './addTask.scss'
import  {AiOutlinePlus} from 'react-icons/ai'
import {TaskDataContext} from '../../../Context/TaskDataContextProvider'

const AddTask = () => {

    const {list, setList, id, setId } = useContext(TaskDataContext);

    const [showInput, setShowInput] = useState(false);
    const [input, setInput] = useState("");

    const addData = () =>{
        setList([...list,{
            id:id+1,
            todo: input,
            complete : false,
        }]);
        setId(prev=>prev+1)
        setInput("");
        setShowInput(false);
    }

   const inputRef = useRef(null);


    useEffect(() => {

      if(showInput)
         inputRef.current.focus()

    }, [showInput])
    

  return (
    <div className='addTask'>
       {!showInput?
        <div className='tapButton ' onClick={()=>{setShowInput(prev=>!prev)}}> 
        <AiOutlinePlus className='plus' /> <div className="addText"> addTask</div> </div>
        :
        <div className='inputArea flex-row'>
            <input value={input} onChange={e=>setInput(e.target.value)} className="inputBox"  ref={inputRef}/>
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