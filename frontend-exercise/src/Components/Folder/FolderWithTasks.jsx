import { cleanup } from '@testing-library/react';
import React, {useEffect,Fragment,UseState} from 'react'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  
  } from "react-router-dom";
  import { useParams } from 'react-router-dom';
  

const FolderWithTasks =()=>{

    const {id} = useParams();
    const[folderTasks,setFolderTasks]= React.useState([]);
    const[folder,setFolder]=React.useState([]);
    const [newFolder,setNewFolder] = useState({
        name:''
    });

React.useEffect(()=>{
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

    setNewFolder({
        ...newFolder,
        [event.target.name]: event.target.value
    })

}

const sendData =(event) =>{

event.preventDefault();
const body = { name };
            const response = await fetch(`http://localhost:8080/task/create?id_folder=${id}`, {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(body)
            });

    }

return (
   
<div>
 <h2>{folder.name}</h2>
    <ul>
        {
            folderTasks.map(item =>(
                <li key={item.id}>
                   
                    {item.description}
                    <Link to={`/edit/${item.id}`} class="m-3">
                     Edit
                    </Link>
                    </li>
            ))
        }
    </ul>

    <Fragment>

<form classname="row" onSubmit={sendData}>

    <div className='col-md-3'>
     <input
         placceholder="New Task"
         className="form-control"
         type="text"
         name="name"
         onChange={handleInputChange}
             >  </input>
    </div>
    <div className='col-md-3'>
     <button type="submit">Add</button>
    </div>
</form>

</Fragment>

</div>
)

}
export default FolderWithTasks