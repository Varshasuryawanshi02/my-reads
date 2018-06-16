import React from 'react'
import './App.css'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

export default class ChangeShelfMenu extends React.Component {
    handleOptionChange = (event) => {
        const shelf = event.target.value === 'none' ? '' : event.target.value
        this.props.onOptionChange(shelf)
    }

    render() {
        return (
            <div className='change-shelf-menu'>
                <FontAwesomeIcon icon='chevron-circle-down' size='2x'/>
                <select value={this.props.value} onChange={this.handleOptionChange}>
                    <option value='move' disabled={true}>Move to:</option>
                    <option value='currentlyReading'>Currently Reading</option>
                    <option value='wantToRead'>Want to Read</option>
                    <option value='read'>Read</option>
                    <option value='none'>None</option>
                </select>
            </div>
        )
    }
}