import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gallery from './components/pages/Gallery';
import Projects from './components/pages/Projects';
import JoinUs from './components/pages/JoinUs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Gallery' component={Gallery} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Join-us' component={JoinUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
