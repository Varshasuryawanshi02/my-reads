import React from 'react'
import './App.css'
import BookShelf from './BookShelf'

class App extends React.Component {
    // TODO: Replace dummy data with real JSON data from BooksAPI
    state = {
        currReading: [{ title: 'Sapiens' }, { title: 'Selfish Gene'}],
        wantToRead: [{ title: 'Zorba the Greek' }, { title: 'The Art of War'}, { title: 'Inivisible Cities' }],
        read: [{ title: 'Great Expectations' }, { title: 'Houe of Leaves' }]
    }

    render() {
        return (
            <div>
                <div className='header'>
                    <h1>MyReads</h1>
                </div>
                <div className='book-shelves'>
                    <BookShelf heading='Currently Reading' books={this.state.currReading}/>
                    <BookShelf heading='Want to Read' books={this.state.wantToRead} />
                    <BookShelf heading='Read'books={this.state.read}/>
                </div>
            </div>
        )
    }
}

export default App
