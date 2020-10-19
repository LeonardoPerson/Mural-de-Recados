import React from 'react'
import {Switch, Route} from 'react-router-dom'
import SignInUser from './SignInUser'
import CreateUser from './CreateUser'
import Home from './Home'

const Rotas = () => {
    return(
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/login' component={SignInUser}></Route>
            <Route path='/create' component={CreateUser}></Route>                               
        </Switch>
    )
}

export default Rotas