import React from 'react'
import './App.css'

class Book extends React.PureComponent {
    
    makePretty = authors => (
        authors.map(author => (
            `${author}, `
        )).join('').slice(0, -2)
    )

    render() {
        const { authors, imageUrl, title } = this.props
        console.log(imageUrl)
        console.log(typeof(imageUrl))

        let authorsString = ''
        if (authors.length > 1) {
            authorsString = `Authors: ${this.makePretty(authors)}`
        } else {
            authorsString = `Author: ${authors[0]}`
        }

        return (
            <div className='book'>
                <div className='book-cover' style={{ backgroundImage: `url(${imageUrl})` }}>
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