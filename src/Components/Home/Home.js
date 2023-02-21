import React from 'react'
import Todo from '../Todo/Todo'
import './home.scss'
const Home = () => {
  return (
    <div className='home center-col'>
        {/* <div>
        Home 
        </div>
         */}
        <div className='w100 center-col'>
            <Todo />
        </div>
    </div>
  )
}

export default Home