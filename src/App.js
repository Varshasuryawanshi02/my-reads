import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import BookShelf from './BookShelf'
import MainPage from './MainPage'
import SearchPage from './SearchPage'

class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={MainPage} />
                <Route path='/search' component={SearchPage} />
            </div>
        )
    }
}

export default App
