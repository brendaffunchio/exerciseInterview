import React, {useEffect} from 'react'
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

React.useEffect(()=>{
getFolder();
getFolderTasks();
console.log(id);
},[])

const getFolderTasks = async ()=>{
    
   const data = await fetch(`http://localhost:8080/task/getByFolder?${id}`);
   
   const dataFolderTasks= await data.json();
   setFolderTasks(dataFolderTasks);
   
}
const getFolder = async()=>{
    const data = await fetch (`http://localhost:8080/folder/get?${id}`);
    const dataFolder= await data.json();
    setFolder(dataFolder);
}
return (
   
<div>
 
       <h3>{folder.name}</h3>
   
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
</div>
)

}
export default FolderWithTasks