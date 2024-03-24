import { ADD_TASK , UPDATE_TASK ,UPDATE_TASK_DONE ,DELETE_TASK } from "../constants/typeaction";

export let add_task =(payload) =>{
    return{
     type : ADD_TASK ,
     payload,
    }
}
export let update_task=(payload) =>{
    return{
    type: UPDATE_TASK,
    payload,
    }
}
export let task_done=(payload)=>{
    return{
        type:UPDATE_TASK_DONE,
        payload,
    }
}
export let delete_task=(payload) =>{
    return{
    type: DELETE_TASK,
    payload,
    };
}
