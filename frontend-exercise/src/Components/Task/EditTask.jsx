import React, {useEffect,Fragment,UseState} from 'react';
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
    const [editTask, setEditTask]= React.useState({
       description:""
    })

  

React.useEffect(()=>{

getTask();

},[])

const getTask = async ()=>{
    
   const data = await fetch(`http://localhost:8080/task/get?id=${id}`);
  
   const dataTask= await data.json();
   setTask(dataTask)
  
}

const handleInputChange =(event)=>{

   setEditTask({
       ...editTask,
       [event.target.name]: event.target.value
   })
console.log("hola");
}

const sendData = async (event) =>{

event.preventDefault();
const body = { description };
console.log(body)
await fetch(`http://localhost:8080/task/edit`, {
               method: 'PUT',
              headers: { "Content-type": "application/json" },
               body: JSON.stringify(body)
           });

           event.target.reset();

   }
return (
   
<div>
   <span>Editing task "{task.description}"</span>

<Fragment>

<form className="row" onSubmit={sendData}>

    <div className='col-md-3'>
     <input
         placeholder={task.description}
         className="form-control"
         type="text"
         name="description"
         onChange={handleInputChange}
            /> 
    </div>
    <div className='col-md-3'>
   <button type="submit" onClick={sendData}>Save</button>
    </div>
    <div className='col-md-3'>
     <Link to="/" class="btn">Cancel</Link>
    </div>
</form>

</Fragment>
</div>

)

}
export default EditTask