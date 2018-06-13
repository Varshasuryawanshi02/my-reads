import React from 'react'
import { Link } from 'react-router-dom' 
import SearchBar from './SearchBar'
import BookShelf from './BookShelf'
import { search, update } from './BooksAPI'

class SearchPage extends React.Component {
    state = {
        searchResults: []
    }

    handleSearchTermChange = async (searchTerm) => {
        const searchResults = await search(searchTerm)

        if (!searchResults || Object.keys(searchResults).length === 0 || searchResults.hasOwnProperty('error')) {
            this.setState({ searchResults: [] })
        } else {
            this.setState({ searchResults })
        }
    }

    render() {
        return(
            <div>
                <Link to='/'>Back</Link>
                <SearchBar onSearchTermChange={this.handleSearchTermChange}/>
                <BookShelf heading='Search Results' books={this.state.searchResults}/>
            </div>
        )
    }
}

export default SearchPage