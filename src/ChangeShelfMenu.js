import React from 'react'
import './App.css'

const ChangeShelfMenu = props => (
    <div className='change-shelf-menu'>
        <select value={props.value} onChange={props.onOptionChange}>
            <option value='move' disabled={true}>Move to:</option>
            <option value='currReading'>Currently Reading</option>
            <option value='wantToRead'>Want to Read</option>
            <option value='read'>Read</option>
            <option value='none'>None</option>
        </select>
    </div>
)

export default ChangeShelfMenu