import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>*****  ButtonHome  *****</h1>
        <Link to="BasicButtons">BasicButtons</Link><br/>
        <Link to="ButtonUplode">ButtonUplode</Link><br/>
        <Link to="IconButtons">IconButtons</Link><br/>
        <Link to="ComplexButton">ComplexButton</Link><br/>
        <Link to="LoadingButton">LoadingButton</Link><br/>
        <h2>-----  Buttogroups  ------</h2>
        <Link to="Buttongroup">Buttongroup</Link><br/>
        <Link to="Buttonvirants">Buttonvirants</Link><br/>
        <Link to="VerticalGroup">VerticalGroup</Link><br/>
    </div>
  )
}
