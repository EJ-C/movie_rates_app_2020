import React from 'react';
import './App.scss';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation.component';
import Detail from './routes/Detail';

import { HashRouter, Route } from 'react-router-dom';


function App() {
  return (
    <HashRouter>
    <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}
export default App;