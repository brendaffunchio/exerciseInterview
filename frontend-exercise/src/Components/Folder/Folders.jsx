import React,{Fragment,useState,useEffect} from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
  
  } from "react-router-dom";
  import axios from 'axios';

const Folders =()=>{

    const[folders,setFolders]= React.useState([]);
    const [newFolder,setNewFolder] = useState({
        name:''
    });

    const {name} = newFolder;
React.useEffect(()=>{

getFolders()

},[])

async function remove(id){

const folderId= id;

await axios({
    method: 'delete', 
    url: `http://localhost:8080/folder/delete?id=${folderId}`
      
});
 
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
const body = { event };
   
      await axios({
            method: 'post', 
            url: 'http://localhost:8080/folder/create',
            data: {event},
            headers: { 
             'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            data: JSON.stringify(body)
        })
   
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
         onChange={event=>handleInputChange(event)}
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