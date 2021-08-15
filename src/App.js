import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/layout/header/header.component'; 
import HomePage from './pages/home/home.component'; 
import ShopPage from './pages/shop/shop.component'; 
import ContactPage from './pages/contact/contact.component'
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route path="/contact" component={ContactPage}/>
      </Switch>
    </div>
  );
}

export default App;
