import React, {useEffect,Fragment,UseState} from 'react';
import{Link} from "react-router-dom";
import { useParams } from 'react-router-dom';
  

const FolderWithTasks =()=>{

    const {id} = useParams();
    const[folderTasks,setFolderTasks]= React.useState([]);
    const[folder,setFolder]=React.useState([]);
    
    const [task,setTask] = React.useState({
        description:''
    });

useEffect(()=>{
getFolder();
getFolderTasks();


},[])

const getFolderTasks = async ()=>{
   
   const data = await fetch(`http://localhost:8080/task/getByFolder?folder_id=${id}`);
  
   const dataFolderTasks= await data.json();
 
  
   setFolderTasks(dataFolderTasks);
   
  
}

const getFolder = async()=>{
    const data = await fetch (`http://localhost:8080/folder/get?id=${id}`);
    const dataFolder= await data.json();
    setFolder(dataFolder);
}

const handleInputChange =(event)=>{

    setTask({
        ...task,
        [event.target.name]: event.target.value
    })

}

const sendData = async (event) =>{

event.preventDefault();
const body = { description };
            const response = await fetch(`http://localhost:8080/task/create?id_folder=${id}`, {
                method: 'POST',
               headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            });

            event.target.reset();

    }

return (
   
<div>
 <h4 class="m-3">{folder.name}</h4>
  
        {
            folderTasks.map(item =>(
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
export default FolderWithTasks