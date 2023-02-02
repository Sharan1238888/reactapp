import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import MainHome from './MainHome';
import Classes from './classes';
import Array from './array';
import Conditional from './Conditional';
import Test from './test';
import Arrow from './arrowfunction';
import Varaible from './varaible';
import Destructuring from './destructuring';
import Functions from './functions';
import Spreadoperator from './spreadoperator';
import Ternaryoperator from './ternary';
import Import from './import';
import Rfc from './Rfc';
import Rcc from './Rcc';
import Props from './Props';
import Events from './Events';
import List from './List'
import Presnt from './present'
import Show from './Show';
import Usestate from './Usestate';
import Useeffect from './Useeffect';
import Propsdrill from './propsdrill';
import Usecontext from './usecontext';
import Registration from './registration';
import Boostrap from './boostrap';
import AutoComplete from './autoComplete'
import ComboBox from './Autocomplete/Combobox';
import CountrySelect from './Autocomplete/CountrySelect';
import Table from './table';
import Piramid from './piramid';
import Triangle from './triangle';
import Grouped from './Autocomplete/grouped';
import DisabledOptions from './Autocomplete/disabled';
import Edit from './Edit';
import View from './view';
import LocalTable from './localStorage/localTable'
import BasicButtons from './buttons/basicButton';
import LocalEdit from './localStorage/localEdit';
import LocalInsert from './localStorage/localInsert';
import ButtonHome from './buttons/buttonHome'
import ButtonUplode from './buttons/buttonUplode'
import IconButtons from './buttons/iconButton';
import AutocompleteHome from './Autocomplete/autocompleteHome'
import Buttongroup from './buttons/buttonGroup'
import ComplexButton from './buttons/complexbutton'
import Buttonvirants from './buttons/buttonViants'
import LoadingButton from './buttons/loadingButton'
import VerticalGroup from './buttons/VerticalGroup'
import Checkbox from './checkbox/checkbox'
import CheckboxColor from './checkbox/checkboxcolor'
import CheckboxIcon from './checkbox/checkboxIcon'
import ControlledCheck from './checkbox/Controlledcheck'
import Indeterminatecheck from './checkbox/Indeterminatecheck'
import Singleview from './localStorage/singleview';
export default function Router() {

  const studentDetail = [
    {
        id:1,
        name: "Rahul",
        rool_no: 10,
        class: "1st",
        school: "ABC",
    },
    {
        id:2,
        name: "Sharan",
        rool_no: 22,
        class: "14th",
        school: "gpt",
    },
    {
        id:3,
        name: "Karthik",
        rool_no: 8,
        class: "1st",
        school: "ABC",
    },
    {
        id:4,
        name: "umesh",
        rool_no: 8,
        class: "1st",
        school: "ABC",
    }

]

  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<MainHome />}></Route>
            <Route exact path='/classes' element={<Classes />}></Route>
            <Route exact path='/array' element={<Array />}></Route>
            <Route exact path='/conditional' element={<Conditional />}></Route>
            <Route exact path='/test' element={<Test />}></Route>
            <Route exact path='/arrow' element={<Arrow />}></Route>
            <Route exact path='/varaible' element={<Varaible />}></Route>
            <Route exact path='/destructuring' element={<Destructuring />}></Route>
            <Route exact path='/functions' element={<Functions />}></Route>
            <Route exact path='/spreadoperator' element={<Spreadoperator />}></Route>
            <Route exact path='/ternaryoperator' element={<Ternaryoperator />}></Route>
            <Route exact path='/import' element={<Import />}></Route>
            <Route exact path='/rfc' element={<Rfc />}></Route>
            <Route exact path='/rcc' element={<Rcc />}></Route>
            <Route exact path='/props' element={<Props />}></Route>
            <Route exact path='/events' element={<Events />}></Route>
            <Route exact path='/list' element={<List />}></Route>
            <Route exact path='/Present' element={<Presnt />}></Route>
            <Route exact path='/show' element={<Show />}></Route>
            <Route exact path='/usestate' element={<Usestate />}></Route>
            <Route exact path='/useeffect' element={<Useeffect />}></Route>
            <Route exact path='/propsdrill' element={<Propsdrill />}></Route>
            <Route exact path='/usecontext' element={<Usecontext />}></Route>
            <Route exact path='/registration' element={<Registration />}></Route>
            <Route exact path='/boostrap' element={<Boostrap />}></Route>
            <Route exact path='/AutocompleteHome/AutoComplete' element={<AutoComplete />}></Route>
            <Route exact path='/AutocompleteHome' element={<AutocompleteHome />}></Route>
            <Route exact path='/AutocompleteHome/ComboBox' element={<ComboBox />}></Route>
            <Route exact path='/AutocompleteHome/CountrySelect' element={<CountrySelect />}></Route>
            <Route exact path='/Table' element={<Table studentDetail={studentDetail} />}></Route>
            <Route exact path='/Piramid' element={<Piramid />}></Route>
            <Route exact path='/Triangle' element={<Triangle />}></Route>
            <Route exact path='/AutocompleteHome/Grouped' element={<Grouped />}></Route>
            <Route exact path='/AutocompleteHome/DisabledOptions' element={<DisabledOptions />}></Route>
            <Route exact path='/edit/:id' element={<Edit />}></Route>
            <Route exact path='/View/:id' element={<View studentDetail={studentDetail} />}></Route>
            <Route exact path='/LocalTable' element={<LocalTable />}></Route>
            <Route exact path='/ButtonHome/BasicButtons' element={<BasicButtons />}></Route>
            <Route exact path='/LocalEdit' element={<LocalEdit />}></Route>
            <Route exact path='/LocalInsert' element={<LocalInsert />}></Route>
            <Route exact path='/ButtonHome' element={<ButtonHome />}></Route>
            <Route exact path='/ButtonHome/ButtonUplode' element={<ButtonUplode />}></Route>
            <Route exact path='/ButtonHome/IconButtons' element={<IconButtons />}></Route>
            <Route exact path='/ButtonHome/Buttongroup' element={<Buttongroup />}></Route>
            <Route exact path='/ButtonHome/ComplexButton' element={<ComplexButton />}></Route>
            <Route exact path='/ButtonHome/Buttonvirants' element={<Buttonvirants />}></Route>
            <Route exact path='/ButtonHome/LoadingButton' element={<LoadingButton />}></Route>
            <Route exact path='/ButtonHome/VerticalGroup' element={<VerticalGroup />}></Route>
            <Route exact path='/Checkbox' element={<Checkbox />}></Route>
            <Route exact path='/CheckboxColor' element={<CheckboxColor />}></Route>
            <Route exact path='/CheckboxIcon' element={<CheckboxIcon />}></Route>
            <Route exact path='/ControlledCheck' element={<ControlledCheck />}></Route>
            <Route exact path='/Indeterminatecheck' element={<Indeterminatecheck />}></Route>
            <Route exact path='/Singleview/:id' element={<Singleview />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
