import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
    const [data, setdata] = useState([]);
    const [first, setfirst] = useState('')
    const getData = () => {
        axios
        .get("https://63d9f2152af48a60a7c2706b.mockapi.io/crud-operation")
        .then((res) => {
            console.log(res.data , "res++");
            setdata(res.data)
        })
    }
    useEffect(() => {
        getData();
    }, [])

    const setTolocalStorage = (id,name,email) =>{
      localStorage.setItem("id" , id)
      localStorage.setItem("name" , name)
      localStorage.setItem("email" , email)
    }
    
    const handleDelete = (id) =>{
      // e.preventDefault();
        axios
        .delete(`https://63d9f2152af48a60a7c2706b.mockapi.io/crud-operation/${id}`
        ).then(() => {
            getData();
        })
    }
    const handleFilter = (e) => {
      setfirst(e.target.value.toLowerCase());
    };

  return (
    <>
   
    <div className="d-flex flex-direction-column justify-content-between m-2">
    <Link to='/'>
      <button className="btn btn-secondary">Add Data</button>
      </Link>
      <div className="d-flex justify-content-between m-2" >
        <input
        type="search" 
        placeholder="Search Data"
        onChange={handleFilter}
        />Search
      </div>
      </div>
    <div className="d-flex justify-content-between m-2">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Email</th>        
              <th scope="col">Edit / Delete</th>        
              {/* <th scope="col">Delete Data</th>*/}
          </tr>
        </thead>
        {
            data.filter ((el) => {
              if(el === '') {
                return el;
              }else{
                return(el.name.toLowerCase().includes(first) ||
                       el.email.toLowerCase().includes(first) ||
                       el.id.toLowerCase().includes(first) 
                ) 
              }
            })
            .map((eachData) => {
                return(
           
        <tbody>
          <tr>
            <th scope="row">{eachData.id}</th>
            <td scope="col">{eachData.name}</td>
            <td>{eachData.email}</td>
            <div>
            <Link to='/edit'>
                <button style={{backgroundColor:"green" , color : "white"}}  onClick=
                  {() => setTolocalStorage(eachData.id,eachData.name,eachData.email ,)}>Edit</button> &nbsp;
            </Link>
            <button style={{backgroundColor:"red" , color : "white"}} onClick={(e) =>  handleDelete(eachData.id, e.preventDefault())}>Delete</button>
            </div>
          </tr>
        
        </tbody>
        )
    })
        }
      </table>
      </div>
      
    </>
  );
};

export default Read;
