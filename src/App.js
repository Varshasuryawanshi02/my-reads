import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import MainPage from './MainPage'
import SearchPage from './SearchPage'
import fontawesome from '@fortawesome/fontawesome'
import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft'
import faChevronCircleDown from '@fortawesome/fontawesome-free-solid/faChevronCircleDown'
import faPlusCircle from '@fortawesome/fontawesome-free-solid/faPlusCircle'

fontawesome.library.add(faArrowLeft, faChevronCircleDown, faPlusCircle)

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
