import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Header from './layout/Header'
import Footer from './layout/Footer'

import Home from './components/Home'
import Login from './components/Login'
import About from './components/About'
import Product from './components/Product'
import NotFound from './components/NotFound'
import Collection from './components/Collection'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div>
      <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/login" component={Login} />
          <Route path="/products/:product" component={Product} />
          <PrivateRoute authed={false} path='/collections' component={Collection} />
          <Route component={ NotFound } />
        </Switch>
      <Footer />
    </div>
  )
}

export default App
