import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import { useDispatch } from 'react-redux';
import { delete_task, task_done } from '../../redux/actions/action';

function Taskitem({task}) {
  const dispatch = useDispatch();
  const handledone=(id)=>{
    dispatch(task_done({ id }));

  };
  const handledelete=(id)=>{
    dispatch(delete_task({ id }));
  }
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Text>
          {task.description}
        </Card.Text>
        <Button variant="primary">Edit</Button>
        <Button
         variant={task.done ? "success":"warning"}
        onClick={()=>handledone(task.id)} > {task.done ? "success":"warning"}</Button>
        <Button variant="danger"
        onClick={()=>handledelete(task.id)} 
        >Delete</Button>
      </Card.Body>
    </Card>

    </div>
  )
}

export default Taskitem