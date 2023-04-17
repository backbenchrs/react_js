import React, { useState } from 'react'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const history = useNavigate();

    const header = {"Access Control Origin":"*"};


    const onClickHandler = (e) => {
        e.preventDefault();
        console.log(onClickHandler, "clickeed");
        axios.post('https://63d9f2152af48a60a7c2706b.mockapi.io/crud-operation',{
            name : name,
            email :email,
            header,
        })
        .then(() => {
        history("/read")
    })
    };
    
  return (
    <>  
    <div className='d-flex justify-content-between m-2'>
    <h1>Create Operation</h1>
    <Link to='/read'>
    <button className='btn btn-primary'>Show Data</button>
 </Link>
  </div>
<form className="row g-3 m-2">
  <div className="col-auto">
    <label htmlFor="staticEmail2" className="visually-hidden">Name</label>
    <input type="text" 
        className="form-control-plaintext" 
        placeholder='Enter Name'
            onChange={(e) => setname(e.target.value)}
        />
  </div>
  <div className="col-auto">
    <label htmlFor="inputPassword2" className="visually-hidden">Email</label>
    <input type="email" 
        className="form-control" 
     id="inputPassword2"
     placeholder="Enter Email" 
     onChange={(e) => setemail(e.target.value)}
     />
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3" onClick={onClickHandler}>Submit</button>
  </div>
</form>


  </>
  )
}

export default Create