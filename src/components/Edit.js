import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Edit = () => {
    const [name, setname] = useState("");
    const [id, setid] = useState(0);
    const [email, setemail] = useState("");

    const read = useNavigate();

    useEffect(() => {
      setid((localStorage.getItem("id")))
      setname((localStorage.getItem("name")))
      setemail((localStorage.getItem("email")))
    }, [])
    

    const header = {"Access Control Origin":"*"};


    const onClickHandlerEdit = (e) => {
        e.preventDefault();
        console.log(onClickHandlerEdit, "edited++");

        axios
        .put(`https://63d9f2152af48a60a7c2706b.mockapi.io/crud-operation/${id}`,{
            name : name,
            email :email,
            
        })
        .then(() => {
        read("/read");
    })
    };
    
  return (
    <>  
    <h1>Edit Operation</h1>
<form className="row g-3">
  <div className="col-auto">
    <label htmlFor="staticEmail2" className="visually-hidden">Name</label>
    <input type="text" 
        className="form-control-plaintext" 
        placeholder='Edit Name'
            onChange={(e) => setname(e.target.value)}
            value={name}
        />
  </div>
  <div className="col-auto">
    <label htmlFor="inputPassword2" className="visually-hidden">Email</label>
    <input type="email" 
        className="form-control" 
     id="inputPassword2"
     placeholder="Edit Email" 
     onChange={(e) => setemail(e.target.value)}
     value={email}
     />
  </div>
  <div className="col-auto">
   
      <button type="submit" className="btn btn-success mb-3" onClick={onClickHandlerEdit}>Edit</button>  &nbsp;
      <Link to='/read'>
      <button  className="btn btn-secondary mb-3">Back</button>
      </Link>
  </div>
</form>


  </>
  )
}

export default Edit