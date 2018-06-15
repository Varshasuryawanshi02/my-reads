import React from 'react'
import './App.css'
import Book from './Book'
import noCoverImageUrl from './img/cover-not-available.png'

class BookShelf extends React.PureComponent {
    render() {
        const { books, heading } = this.props

        return (
            <div>
                <h2>{heading}</h2>
                {books && Object.keys(books).length > 0
                &&   <div className='books-container'>
                        {Object.keys(books).map(key => (
                            <Book
                                key={books[key].id}
                                id={books[key].id}
                                authors={books[key].authors || ['Unkown']}
                                title={books[key].title}
                                imageUrl={
                                    books[key].imageLinks
                                    ? books[key].imageLinks.thumbnail
                                    : noCoverImageUrl
                                }
                                shelf={books[key].shelf}
                                onOptionChange={this.props.onOptionChange}
                            />
                        ))}
                    </div>
                }
            </div>
        )
    }
}

export default BookShelf