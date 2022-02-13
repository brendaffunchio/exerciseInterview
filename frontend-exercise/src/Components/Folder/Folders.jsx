import React, {useEffect} from 'react'
import{
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  
  } from "react-router-dom";

const Folders =()=>{

    const[folders,setFolders]= React.useState([])

React.useEffect(()=>{

getFolders()

},[])

const getFolders = async ()=>{
   const data = await fetch('http://localhost:8080/folder/getAll')
   const dataFolders= await data.json()
   setFolders(dataFolders)
}
return (
<div>
    
    <ul>
        {
            folders.map(item =>(
                <li key={item.id}>
                    {item.name}
                    <Link to={`/Folders/${item.id}`} class="m-3">
                    View items
                    </Link> Remove
                   
                 
                    </li>
            ))
        }
    </ul>
</div>
)

}
export default Folders