import React from 'react'
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import img from '../img1.png'

export default function Singleview() {
  const [single, setSingle] = useState([])

  const params = useParams()
  // console.log(params)

  useEffect(()=>{
    setSingle((JSON.parse(localStorage.getItem("Employee"))).filter((item)=>{
      return item.emp_id==params.id }))
  },[])
  // console.log(single)

  return (
    <div>
      <h1>View</h1>
    <div className="card" style={{width: "18rem"}}>
  <img src={img} className="card-img-top" alt="..." />
  {single.map((i)=>{
    return(
  <div className="card-body" key={i.emp_id} >
  {/* {single[0]?.emp_id} */}
    <h5 className="card-title">Employee_Id : {i.emp_id}</h5>
    <h5 className="card-title">Name : {i.name} </h5>
    <h5 className="card-title">Phone no : {i.phone}</h5>
    <h5 className="card-title">Email : {i.email}</h5>
    <a href="/LocalTable" className="btn btn-primary">Go somewhere</a>
  
  </div>
 )})}
</div>
    </div>
  )
}
