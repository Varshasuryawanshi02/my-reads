import React from 'react'
import './App.css'
import BookShelf from './BookShelf'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class App extends React.Component {
    render() {
        return (
            <div>
                <MainPage />
                {/* <SearchPage /> */}
            </div>
        )
    }
}

export default App
