import React,{useEffect,useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import img from './img1.png'

export default function View({studentDetail}) {
    const [value, setValue] = useState([])
    const params = useParams()
    console.log(params.id)
   console.log(studentDetail)

   useEffect(() => {
    setValue(studentDetail.filter((e) =>e.id == params.id))
   }, [])

    console.log(value);


  return (
    <div>
<div style={{ backgroundColor: "#ffffe6", fontFamily: "Sofia" }}>
            <br /> <h1>View</h1> <br />
            <div lg="4" style={{ display: "flex" }}>
{value.map((i) => {
                    return (
<div className="card" style={{width: "14rem",margin:"auto"}}>
                            <img src={img} class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Name: {i.name}</h5>
                                    <h5 className="card-title">Roll_no: {i.rool_no}</h5>
                                    <h5 className="card-title">Class: {i.class}</h5>
                                    <h5 className="card-title">School: {i.school}</h5>
                                    <a href="http://localhost:3000/Table" className="btn btn-primary">Go back</a>
                                </div> 
                        </div>
                    )
                        })}
                            </div>

                            </div>
    </div>
    
  )

}
