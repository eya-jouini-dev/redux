import React from 'react'
import Taskitem from '../Taskitem/Taskitem';
import { useSelector } from 'react-redux';
import "./style.css"

function TaskList() {
    const {tasks} = useSelector(state=>state) ;
return (
    <div className='tasks'>
      {tasks.map((task , index) => {return <Taskitem task={task}/>
      }
      )}
    </div>
  )
}

export default TaskList