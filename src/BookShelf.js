import React from 'react'
import './App.css'
import Book from './Book'

class BookShelf extends React.PureComponent {
    render() {
        return (
            <div>
                <h2>{this.props.heading}</h2>
                <div className='books-container'>
                    {this.props.books.map(book => (
                        <Book title={book.title} />
                    ))}
                </div>
            </div>
        )
    }
}

export default BookShelf