import React, { useState } from 'react'
import { InputGroup, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add_task } from '../../redux/actions/action';


function AddTask() {
  const [ description , setDescription]= useState("");
  const handleChange=(e) =>{
    setDescription(e.target.value);
  };
  const dispatch = useDispatch();
  const handleAddTask = ()=>{
    dispatch(add_task(description));
  };
  
  return (
 <InputGroup className="mb-3">
    <Form.Control placeholder="Add your Task" aria-label="Recipient's username" onChange={handleChange}/>
    <Button variant="outline-secondary" id="button-addon2" onClick={handleAddTask}> AddTask </Button>
    
 </InputGroup>
  )
}

export default AddTask;