import React, {useEffect} from 'react'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  
  } from "react-router-dom";

const Tasks =()=>{

    const[tasks,setTasks]= React.useState([])

React.useEffect(()=>{

getTasks()

},[])

const getTasks = async ()=>{
    
   const data = await fetch('http://localhost:8080/task/getAll');
   
   const dataTasks= await data.json();
   setTasks(dataTasks)
   
}
return (
   
<div>
 
       <h3>To-do List</h3>
   
    <ul>
        {
            tasks.map(item =>(
                <li key={item.id}>
                   
                    {item.description}
                    <Link to={`/edit/${item.id}`} class="m-3">
                     Edit
                    </Link>
                    </li>
            ))
        }
    </ul>
</div>
)

}
export default Tasks