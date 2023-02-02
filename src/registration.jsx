import React,{useState} from 'react'

export default function Registration() {
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const Submit = (p)=>{
    
        console.log("Name : " + name)
        console.log("Phone : " + phone)
        console.log("Email : " + email)
        console.log("Address : " + address)
        
    }

  return (
    <div>
        <h1>*******Registration*******</h1>
        {/* <form> */}
        <label>Name : </label><input type="text" onChange={(e)=>setName(e.target.value)} /><br/>
        <label>Phone : </label><input type="tel" onChange={(e)=>setPhone(e.target.value)}/><br/>
        <label>Email : </label><input type="email" onChange={(e)=>setEmail(e.target.value)}/><br/>
        <label>Address : </label><input type="text" onChange={(e)=>setAddress(e.target.value)}/><br/>
        <button onClick={Submit}>Register</button><br/><br/><br/>
        {name}<br/>
        {phone}<br/>
        {email}<br/>
        {address}<br/>
        {/* </form> */}
        <table border="" bgcolor='red'>
        <tr>
          <th>Name</th>
          <th>Phone No.</th>
          <th>Email</th>
          <th>address</th>
        </tr>
        <tr>
          <td>{name}</td>
          <td>{phone}</td>
          <td>{email}</td>
          <td>{address}</td>
        </tr>
        </table>
    </div>
  )
}
