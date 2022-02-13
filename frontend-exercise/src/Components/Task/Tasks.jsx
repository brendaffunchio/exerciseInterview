import React, {useEffect,Fragment,UseState} from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  
  } from "react-router-dom";

const Tasks =()=>{

    const[tasks,setTasks]= React.useState([]);
    const[newTask,setNewTask]=React.useState({
        description:''
    });

React.useEffect(()=>{

getTasks()

},[])

const getTasks = async ()=>{
    
   const data = await fetch('http://localhost:8080/task/getAll');
   
   const dataTasks= await data.json();
   setTasks(dataTasks)
   
}

const handleInputChange =(event)=>{

    setNewTask({
        ...newTask,
        [event.target.name]: event.target.value
    })

}

const sendData = async (event) =>{
event.preventDefault();
const body = { description };
            const response = await fetch(`http://localhost:8080/task/create?id_folder=${id}`, {
                method: 'POST',
               headers: { "Content-type": "application/json"} ,
                body: JSON.stringify(body)
            });

            event.target.reset();

    }
return (
   
<div>
 
       <h4 class="m-3">To-do List</h4>
   
 
        {
            tasks.map(item =>(
               
                <p key={item.id}>
                    <div class="container">
                    <div class="row justify-content-md-left">
                     <div class="col col-lg-2">
                      
                 <input type="checkbox" value="true"/> {item.description}
                                 
                    
                    </div>
                    <div class="col-md-auto">
                  <Link to={`/edit/${item.id}`}>
                     Edit
                    </Link></div>
                    </div>
                    </div>
                    </p>
                  
                   
            ))
        }
   <Fragment>

<form className="row mb-3" onSubmit={sendData}>

    <div className='col-md-3'>
     <input
         placceholder="New Task"
         className="form-control"
         type="text"
         name="description"
         onChange={handleInputChange}
            /> 
    </div>
    <div className='col-md-3'>
     <button type="submit" onSubmit={sendData}>Add</button>
    </div>
</form>

</Fragment>

</div>
)

}
export default Tasks