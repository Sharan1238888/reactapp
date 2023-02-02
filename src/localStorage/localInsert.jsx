import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LocalInsert() {
  
  let navigate = useNavigate()
   
  let initvalue;
  if(localStorage.getItem("Employee") === null){
    initvalue = []
  }
  else {
    initvalue = JSON.parse(localStorage.getItem("Employee"))
  }

  const [value, setValue] = useState(initvalue);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    // const Submit=(e)=>{
    //     e.preventDefault()
    //     console.log(name)
    //     console.log(phone)
    //     console.log(email)
    //     localStorage.setItem("Employee_Name",name)
    //     localStorage.setItem("Phone",phone)
    //     localStorage.setItem("Email",email)
    // }
    // let x = localStorage.getItem("Employee_Name")

    const onSubmit = async () => {
      let emp_id = 100;
      if(value.length === 0){
        emp_id = 101;
      }
      else{
        emp_id = value[value.length - 1].emp_id + 1
      }

      const details ={
        emp_id:emp_id,
        name:name,
        phone:phone,
        email:email
      }
      setValue([...value,details])
      await localStorage.setItem("Employee", JSON.stringify(value))
      navigate("/LocalTable")
    }

    useEffect(() => {
    localStorage.setItem("Employee", JSON.stringify(value))
    },[value])



  return (
    <div>
        <div>
      <h1>----Insert----</h1>
      <div className="card" style={{width: "20rem",margin:"auto"}}>
          <div className="card-body">
        <form>
        <input type="text" className="form-control" onChange={(e)=>{setName(e.target.value)}} placeholder="Employee_Name" /><br/>
        <input type="number" className="form-control" onChange={(e)=>{setPhone(e.target.value)}} placeholder="Phone" /><br/>
        <input type="email" className="form-control" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email" /><br/>
       <button onClick={onSubmit}>submit</button>
      </form>
      </div> 
      </div>
    </div>
    </div>
  )
}
