import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import StaffList from './components/staffs/StaffList'
// import StaffDetail from './components/staffs/StaffDetail'
import StaffShow from './components/staffs/StaffShow'
import ServiceShow from './components/services/ServiceShow'
import ProductShow from './components/products/ProductShow'

import ProductList from './components/products/ProductList'
import ContactPage from './components/common/ContactPage'
import ErrorPage from './components/common/ErrorPage'
// import ServiceShow from './components/services/ServiceDetail'



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path ="/staffs/:id" component={StaffShow} />
        <Route path ="/staffs" component={StaffList} />
        <Route path ="/products/:id" component={ProductShow} />
        <Route path ="/products" component={ProductList} />
        <Route path ="/services" component={ServiceShow} />
        <Route path ="/contact" component={ContactPage} />
        <Route path="/*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
