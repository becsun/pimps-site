import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import StaffList from './components/staffs/StaffDetail'
import StaffDetail from './components/staffs/StaffDetail'
import ServiceList from './components/services/ServiceList'
import ProductList from './components/products/ProductList'
import ContactPage from './components/common/ContactPage'
import ErrorPage from './components/common/ErrorPage'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path ="/staffs" component={StaffList} />
        <Route path ="/staffs" component={StaffDetail} />
        <Route path ="/products" component={ProductList} />
        <Route path ="/services" component={ServiceList} />
        <Route path ="/contact" component={ContactPage} />
        <Route path="/*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
