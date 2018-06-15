import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import BookShelf from './BookShelf'
import { getAll, update } from './BooksAPI'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class MainPage extends React.Component {
    state = {
        currReading: [],
        wantToRead: [],
        read: []
    }

    async componentDidMount() {
        const allBooks = await getAll()

        const currReading = []
        const wantToRead = []
        const read = []

        Object.keys(allBooks).forEach(key => {
            switch (allBooks[key].shelf) {
                case 'currentlyReading':
                    currReading.push(allBooks[key])
                    break;
                case 'wantToRead':
                    wantToRead.push(allBooks[key])
                    break;
                case 'read':
                    read.push(allBooks[key])
            }
        })

        this.setState({
            currReading,
            wantToRead,
            read
        })
    }

    render() {
        return (
            <div>
                <div className='header'>
                    <h1>MyReads</h1>
                </div>
                <div className='book-shelves'>
                    <BookShelf heading='Currently Reading' books={this.state.currReading} />
                    <BookShelf heading='Want to Read' books={this.state.wantToRead} />
                    <BookShelf heading='Read'books={this.state.read} />
                </div>
                <div className='search-btn'>
                    <Link to='/search'>
                        <FontAwesomeIcon icon='plus-circle' size='5x' color='#707070' />
                    </Link>
                </div>
            </div>
        )
    }
}

export default MainPage