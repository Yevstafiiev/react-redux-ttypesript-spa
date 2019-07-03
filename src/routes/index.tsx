import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../components/Home'
import News from '../pages/News'
import { Profile } from '../pages/Profile'
import { PrivateRoute } from '../components/PrivateRoute/PrivateRoute'
import { Login } from '../pages/Login'
import { PageNotFound } from '../components/PageNotFound/PageNotFound'

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/news" component={News} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/profile" component={ Profile } /> 
      <Route component={PageNotFound} />
    </Switch>
  </div>
)

export default routes