import React from 'react'
import './App.css'

class Book extends React.PureComponent {
    render() {
        return (
            <div className='book'>
                <div className='book-cover' style={{height: 200, width: 150, backgroundImage: `url(${this.props.imageUrl})`}}></div>
                <div className='book-title'>{this.props.title}</div>
            </div>
        )
    }
}

export default Book