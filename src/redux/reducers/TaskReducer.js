import { ADD_TASK, DELETE_TASK, UPDATE_TASK, UPDATE_TASK_DONE } from "../constants/typeaction";

const intitialState = {
    tasks :[
        {
            description:"description",
            done:false,
            id:Math.random() ,
        },
    ],
};
 export const TaskReducer = (state=intitialState,action)=>{
    const{type,payload}=action;
    switch (type) {
        case ADD_TASK:
            return{
                ...state , tasks:[...state.tasks,{description:payload , done:false , id : Math.random()},],
            };
        case UPDATE_TASK:
            return{
                ...state , tasks : state.tasks.map((task,index)=> task.id==payload.id ? {...task , description:payload.description} : task ),
            };
            
        case UPDATE_TASK_DONE:
            return{
                ...state , tasks : state.tasks.map( (task , index) => task.id==payload.id ?{...task , done:!task.done}  : task),
            };

        case DELETE_TASK:
            return{
                ...state , tasks : state.tasks.filter((task , index)=>task.id !== payload.id),
            };
            
            
    
        default:
            return state;
    }
 }

