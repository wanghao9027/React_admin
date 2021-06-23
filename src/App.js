/*
    应用的跟组件
*/
import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Login from './page/login/Login'
import Admin from './page/admin/Admin'
export default class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route path='/admin' component={Admin}/>
                </Switch>       
            </BrowserRouter>   
           
        )
    }
}
