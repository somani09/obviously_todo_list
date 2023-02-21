import React, {createContext, useState} from 'react'

export const TaskDataContext = createContext(null);

const TaskDataContextProvider = ({children}) => {

    const [list, setList] = useState([
        {
            id:1,
            todo:'trying list1',
            complete:false
        },
        {
            id:2,
            todo:'trying list2',
            complete:false
        }
    ])
    const [id, setId] = useState(2);

  return (
    <TaskDataContext.Provider value={{list, setList, id, setId}} >
      {children}
    </TaskDataContext.Provider>
  )
}

export default TaskDataContextProvider