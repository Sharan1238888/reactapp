import React from 'react'
import { Link } from 'react-router-dom'
import Edit from './Edit'

export default function table({studentDetail}) {
    



  return (
    <div>
<table className="table table-bordered">
  <thead>
    <tr>
      <th scope="col">si no.</th>
      <th scope="col">Name</th>
      <th scope="col">roll_no</th>
      <th scope="col">class</th>
      <th scope="col">school</th>
      <th scope="col">view</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {studentDetail.map((item,index,Delete)=>{
        return(
            <tr>
      <th scope="row">{index+1}</th>
      <td>{item.name}</td>
      <td>{item.rool_no}</td>
      <td>{item.class}</td>
      <td>{item.school}</td>
      <td><button><Link to={`/View/${item.id}`}>View</Link></button></td>
      <td><button><Link to={`/edit/${item.id}`}>Edit</Link></button></td>
      {/* <td><Link to="edit">Edit</Link><br/></td> */}
      <td><button><Link onClick={()=>Delete(item.id)}>Delete</Link></button></td>
    </tr>
        )
    })}
  </tbody>
 </table>
</div>
  )
}



//goto edit.jsx
