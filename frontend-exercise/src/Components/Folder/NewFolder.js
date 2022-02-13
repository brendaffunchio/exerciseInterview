import React,{Fragment,useState} from 'react';

const NewFolder = () => {

    const [newFolder,setNewFolder] = useState({
        name:''
    });

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

    );
}