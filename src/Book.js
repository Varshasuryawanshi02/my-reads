import React from 'react'
import './App.css'

class Book extends React.PureComponent {
    render() {
        return (
            <div className='book'>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default Book