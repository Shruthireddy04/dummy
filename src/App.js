import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import LoginForm from './components/LoginForm'
// import Home from './components/Home'
// import Products from './components/Products'
// import ProductItemDetails from './components/ProductItemDetails'
// import Cart from './components/Cart'
// import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {
    isDark:false,
  }
  render() {
    const {isDark} = this.state

    return (
      <ThemeContext.Provider
        value={{
          isDark,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          {/* <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/products" component={Products} />
          <ProtectedRoute
            exact
            path="/products/:id"
            component={ProductItemDetails}
          />
          <ProtectedRoute exact path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" /> */}
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
