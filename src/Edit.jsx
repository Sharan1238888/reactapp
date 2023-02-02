import React from 'react'

export default function Edit() {
  return (
    <div>
      <h1>----edit----</h1>
      <div className="card" style={{width: "20rem",margin:"auto"}}>
          {/* <img src=" " className="card-img-top" alt="..." /> */}
          <div className="card-body">
        <form>
        <input type="text" className="form-control" placeholder="Name" /><br/>
        <input type="number" className="form-control" placeholder="Roll_no" /><br/>
        <input type="number" className="form-control" placeholder="Class" /><br/>
        <input type="text" className="form-control" placeholder="School" /><br/><br/>
       <button>Update</button>
     
      </form>
      </div> 
      </div>
    </div>
  )
}
