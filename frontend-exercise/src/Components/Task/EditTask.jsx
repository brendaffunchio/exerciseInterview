import React, {useEffect} from 'react'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  
  } from 'react-router-dom';
  import { useParams } from 'react-router-dom';

const EditTask =()=>{

    const {id} = useParams()
    const[task,setTask]= React.useState([])

    console.log(id);

React.useEffect(()=>{

getTask();

},[])

const getTask = async ()=>{
    
   const data = await fetch(`http://localhost:8080/task/get?id=${id}`);
  
   const dataTask= await data.json();
   setTask(dataTask)
  
}
return (
   
<div>
   <h3>{task.description}</h3>
</div>
)

}
export default EditTask