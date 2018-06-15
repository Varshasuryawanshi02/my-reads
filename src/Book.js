import React from 'react'
import './App.css'
import ChangeShelfMenu from './ChangeShelfMenu'

class Book extends React.PureComponent {
    handleOptionChange = (shelf) => {
        const thisBook = { id: this.props.id }
        this.props.onOptionChange(thisBook, shelf)
    }
    
    makePretty = authors => (
        authors.map(author => (
            `${author}, `
        )).join('').slice(0, -2)
    )

    render() {
        const { authors, imageUrl, title } = this.props

        let authorsString = ''
        if (authors.length > 1) {
            authorsString = `Authors: ${this.makePretty(authors)}`
        } else {
            authorsString = `Author: ${authors[0]}`
        }

        return (
            <div className='book'>
                <div className='book-cover' style={{ backgroundImage: `url(${imageUrl})` }}>
                    <div className='change-shelf-menu-component'>
                        <ChangeShelfMenu
                            value={this.props.shelf || 'none'}
                            onOptionChange={this.handleOptionChange}
                        />
                    </div>
                </div>
                <div className='book-title'>
                    Title: {title}
                </div>
                <div className='book-author'>
                    {authorsString}
                </div>
            </div>
        )
    }
}

export default Book