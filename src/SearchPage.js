import React from 'react'
import { Link } from 'react-router-dom' 
import SearchBar from './SearchBar'
import BookShelf from './BookShelf'
import { search } from './BooksAPI'

export default class SearchPage extends React.Component {
    state = {
        searchResults: []
    }

    handleSearchTermChange = async (searchTerm) => {
        const results = await search(searchTerm)

        if (!results || Object.keys(results).length === 0 || results.hasOwnProperty('error')) {
            this.setState({ searchResults: [] })
        } else {
            // adds shelf info to search results
            const resultsWithShelfInfo = results.map(book => {
                if (this.props.currentlyReading.find(b => b.id === book.id)) {
                    book.shelf = 'currentlyReading'
                    return book
                } else if (this.props.wantToRead.find(b => b.id === book.id)) {
                    book.shelf = 'wantToRead'
                    return book
                } else if (this.props.read.find(b => b.id === book.id)) {
                    book.shelf = 'read'
                    return book
                } else {
                    return book
                }
            })

            this.setState({ searchResults: resultsWithShelfInfo })
        }
    }

    render() {
        return(
            <div>
                <Link to='/'>Back</Link>
                <SearchBar
                    onSearchTermChange={this.handleSearchTermChange}
                />
                <BookShelf
                    heading='Search Results'
                    books={this.state.searchResults}
                    onOptionChange={this.props.onOptionChange}
                />
            </div>
        )
    }
}