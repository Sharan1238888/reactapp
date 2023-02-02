import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './App.css'

export default function MainHome() {
  return (
    <div>
      <h1>*****  MainHome  *****</h1>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <div>
        <Button><Link to="classes" className="link">Classes</Link></Button>
        <Button><Link to="array" className="link">Array</Link></Button>
        <Button><Link to="conditional" className="link">Conditional</Link></Button>
        <Button><Link to="test" className="link">Test</Link></Button><br/>
        <Button><Link to="arrow" className="link">Arrow</Link></Button>
        <Button><Link to="varaible" className="link">Variable</Link></Button>
        <Button><Link to="destructuring" className="link">Destructuring</Link></Button>
        <Button><Link to="functions" className="link">Functions</Link></Button><br/>
        <Button><Link to="spreadoperator" className="link">Spreadoperator</Link></Button>
        <Button><Link to="ternaryoperator" className="link">Ternaryoperator</Link></Button>
        <Button><Link to="import" className="link">Import</Link></Button>
        <Button><Link to="rfc" className="link">Rfc</Link></Button><br/>
        <Button><Link to="rcc" className="link">Rcc</Link></Button>
        <Button><Link to="props" className="link">Props</Link></Button>
        <Button><Link to="events" className="link">Events</Link></Button>
        <Button><Link to="list" className="link">List</Link></Button><br/>
        <Button><Link to="usestate" className="link">useState</Link></Button>
        <Button><Link to="useeffect" className="link">useEffect</Link></Button>
        <Button><Link to="propsdrill" className="link">Propsdrill</Link></Button>
        <Button><Link to="usecontext" className="link">Usecontext</Link></Button><br/>
        <Button><Link to="registration" className="link">Registration</Link></Button>
        <Button><Link to="boostrap" className="link">Boostrap</Link></Button>
        <Button><Link to="AutocompleteHome" className="link">AutocompleteHome</Link></Button>
        <Button><Link to="Table" className="link">Table</Link></Button><br/>
        <Button><Link to="Piramid" className="link">Piramid</Link></Button>
        <Button><Link to="Triangle" className="link">Triangle</Link></Button>
        <Button><Link to="LocalTable" className="link">LocalTable</Link></Button>
        <Button><Link to="ButtonHome" className="link">ButtonHome</Link></Button><br/>
        <Button><Link to="Checkbox" className="link">Checkbox</Link></Button>
        <Button><Link to="CheckboxColor" className="link">CheckboxColor</Link></Button>
        <Button><Link to="CheckboxIcon" className="link">CheckboxIcon</Link></Button>
        <Button><Link to="ControlledCheck" className="link">ControlledCheck</Link></Button>
        <Button><Link to="Indeterminatecheck" className="link">Indeterminatecheck</Link></Button>
        </div>
        </ButtonGroup>
        


    </div>
  )
}
