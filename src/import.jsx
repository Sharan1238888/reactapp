import React from 'react'
import pincode from './exports';
import Hello2,{name,age,Hello,address,phone_no} from './exports';

export default function imports() {
  return (
    <div><h1>------------Import------------</h1>
    {name},{age}
    <br/>
    <Hello/><br/>
    {address}, {phone_no}<br/>
    {/* {pincode} */}
    {<Hello2/>}
    <h1>------------Import  End------------</h1>
    </div>
  )
}
