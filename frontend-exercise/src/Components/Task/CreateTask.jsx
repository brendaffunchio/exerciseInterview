import React, {useEffect} from 'react'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  
  } from "react-router-dom";

const CreateTask =()=>{

    const[task,setTask]= React.useState([])
    

React.useEffect(()=>{

getTask()

},[])

const getTask = async ()=>{
    
   const data = await fetch('http://localhost:8080/task/getAll');
  
   const dataTask= await data.json();
   setTask(dataTask)
  
}
return (
   
<div>
   
</div>
)

}
export default CreateTask