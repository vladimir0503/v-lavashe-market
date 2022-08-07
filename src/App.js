import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/pages/Home/Home';
import Footer from './Components/Footer/Footer';
import Cart from './Components/pages/Cart/Cart';
import About from './Components/pages/About/About';
import Menu from './Components/pages/Menu/Menu';
import Contacts from './Components/pages/Contacts/Contacts';

import './App.scss';
import React from 'react';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <main className='Main'>
            <Route path='/' component={Home} exact />
            <Route path='/menu' component={Menu} exact />
            <Route path='/cart' component={Cart} exact />
            <Route path='/about' component={About} exact />
            <Route path='/contacts' component={Contacts} exact />
          </main>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;