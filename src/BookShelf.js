import React from 'react'
import './App.css'
import Book from './Book'

class BookShelf extends React.Component {
    render() {
        const { books, heading, onOptionChange } = this.props

        return (
            <div>
                <h2>{heading}</h2>
                {books && Object.keys(books).length > 0
                &&   <div className='books-container'>
                        {Object.keys(books).map(key => (
                            <Book
                                key={books[key].id}
                                id={books[key].id}
                                authors={books[key].authors}
                                title={books[key].title}
                                imageLinks={books[key].imageLinks}
                                shelf={books[key].shelf}
                                onOptionChange={onOptionChange} />
                        ))}
                    </div>
                }
            </div>
        )
    }
}

export default BookShelf