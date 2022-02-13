import React,{Fragment,useState,useEffect} from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  
  } from "react-router-dom";

const Folders =()=>{

    const[folders,setFolders]= React.useState([]);
    const [newFolder,setNewFolder] = useState({
        name:''
    });

React.useEffect(()=>{

getFolders()

},[])
async function remove(id){
const folderId= id;
  await fetch(`http://localhost:8080/folder/delete?id=${folderId}`,{
    method: 'DELETE'
  })
 
}

const getFolders = async ()=>{
   const data = await fetch('http://localhost:8080/folder/getAll')
   const dataFolders= await data.json()
   setFolders(dataFolders)
}
const handleInputChange =(event)=>{

    setNewFolder({
        ...newFolder,
        [event.target.name]: event.target.value
    })

}

const sendData =async (event) =>{

event.preventDefault();

        const response = await fetch('http://localhost:8080/folder/create', {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(body)
        });

}

return (
<div class="m-3">
    
    
        {
           
            folders.map(item =>(
                <p key={item.id}>
                    <div class="container">
                    <div class="row justify-content-md-left">
                     <div class="col col-lg-2">
                    {item.name}
                    </div>
                    <div class="col-md-auto">
                    <Link to={`/Folders/${item.id}`}>
                    View items
                    </Link> </div> <div class="col col-lg-2"><button onClick={() => remove(item.id)}>Remove</button></div>
                    </div>
                    </div>
                    </p>
            ))
        }
    <Fragment>

<form className="row mb-3" onSubmit={sendData}>

    <div className='col-md-3'>
     <input
         placceholder="New Folder"
         className="form-control"
         type="text"
         name="name"
         onChange={handleInputChange}
             /> 

    </div>
    <div className='col-md-3'>
     <button type="submit">Add</button>
    </div>
</form>

</Fragment>
</div>
)

}
export default Folders