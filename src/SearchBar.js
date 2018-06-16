import React from 'react'
import PropTypes from 'prop-types'

export default class SearchBar extends React.PureComponent {
    state = {
        searchTerm: ''
    }

    handleChange = (event) => {
        const searchTerm = event.target.value
        this.setState({ searchTerm })
        this.props.onSearchTermChange( searchTerm )
    }

    render() {
        return (
            <div>
                <input
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    placeholder='Start typing to search for a book' />
            </div>
        )
    }
}

SearchBar.propTypes = {
    onSearchTermChange: PropTypes.func.isRequired
}