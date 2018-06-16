import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import BookShelf from './BookShelf'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

const MainPage = (props) => (
    <div>
        <div className='header'>
            <h1>MyReads</h1>
        </div>
        <div className='book-shelves'>
            <BookShelf
                heading='Currently Reading'
                books={props.currentlyReading}
                onOptionChange={props.onOptionChange}
            />
            <BookShelf
                heading='Want to Read'
                books={props.wantToRead}
                onOptionChange={props.onOptionChange}
            />
            <BookShelf
                heading='Read'
                books={props.read}
                onOptionChange={props.onOptionChange}
            />
        </div>
        <div className='search-btn'>
            <Link to='/search'>
                <FontAwesomeIcon icon='plus-circle' size='5x' color='#707070' />
            </Link>
        </div>
    </div>
)

export default MainPage