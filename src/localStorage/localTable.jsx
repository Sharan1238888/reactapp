import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Table() {

  const [display, setDisplay] = useState([]);
  const [delete_item, setDelete_item] = useState();
  const onDelete = () => {
    console.log("delete:" +JSON.stringify(delete_item))
    const newDisplay=display.filter((e)=>{
      console.log(e)
      return e !== delete_item
    });
    setDisplay(newDisplay)
    console.log(newDisplay)
    localStorage.setItem("Employee",JSON.stringify(newDisplay))
  }


  useEffect(() => {
    setDisplay(JSON.parse(localStorage.getItem("Employee")))
  }, [])
  console.log(display)

  return (
    <div>
      <button><Link to={"/LocalInsert"}>Insert</Link></button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">si no.</th>
            <th scope="col">Employee_Id</th>
            <th scope="col">Employee_Name</th>
            <th scope="col">Phone_no</th>
            <th scope="col">Email</th>
            <th scope="col">view</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {display.map((item, index, Delete) => {
          return (
            <tbody key={item.emp_id}>
              <tr>
                <th scope="row">{index + 1}</th>
                <th scope="row">{item.emp_id}</th>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                {/* <td><button><Link to={`/LocalView/${item.emp_id}`}>View</Link></button></td>  */}
                <td><button><Link to={`/Singleview/${item.emp_id}`}>View</Link></button></td>
                <td><button><Link to="">Edit</Link></button></td>
                <td><button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => {
                  setDelete_item(item)
                }}>
                  Delete</button></td>
              </tr>
            </tbody>
          )
        })}
      </table>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you Delete item
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => onDelete(delete_item)}>Yes</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}



//goto edit.jsx
