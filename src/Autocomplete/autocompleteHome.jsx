import React from 'react'
import { Link } from 'react-router-dom'

export default function AutocompleteHome() {
  return (
    <div>
      <h1>*****  AutocompleteHome  *****</h1>
      <Link to="AutoComplete">AutoComplete</Link><br/>
      <Link to="ComboBox">ComboBox</Link><br/>
      <Link to="CountrySelect">CountrySelect</Link><br/>
      <Link to="Grouped">Grouped</Link><br/>
      <Link to="DisabledOptions">DisabledOption</Link><br/>
    </div>
  )
}
