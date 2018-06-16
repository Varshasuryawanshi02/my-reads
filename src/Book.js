import React from 'react'
import './App.css'
import ChangeShelfMenu from './ChangeShelfMenu'
import noCoverImageUrl from './img/cover-not-available.png'

export default class Book extends React.Component {
    handleOptionChange = (shelf) => {
        const thisBook = {
            id: this.props.id,
            title: this.props.title,
            authors: this.props.authors,
            imageLinks:  this.props.imageLinks,
            shelf: this.props.shelf
        }

        this.props.onOptionChange(thisBook, shelf)
    }

    makeAuthorsString = (authors) => {
        let authorsString = ''

        if (!authors || authors.length === 0) {
            authorsString = 'Author: Unkown'
        } else if (authors.length > 1) {
            authorsString = `Authors: ${this.makePretty(authors)}`
        } else {
            authorsString = `Author: ${authors[0]}`
        }

        return authorsString
    }
    
    makePretty = authors => (
        authors.map(author => (
            `${author}, `
        )).join('').slice(0, -2)
    )

    render() {
        const { authors, imageLinks, shelf, title} = this.props

        const imageUrl = imageLinks ? imageLinks.thumbnail : noCoverImageUrl

        return (
            <div className='book'>
                <div className='book-cover' style={{ backgroundImage: `url(${imageUrl})` }}>
                    <div className='change-shelf-menu-component'>
                        <ChangeShelfMenu
                            value={shelf || 'none'}
                            onOptionChange={this.handleOptionChange}
                        />
                    </div>
                </div>
                <div className='book-title'>
                    Title: {title}
                </div>
                <div className='book-author'>
                    {this.makeAuthorsString(authors)}
                </div>
            </div>
        )
    }
}