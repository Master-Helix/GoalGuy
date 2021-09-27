import React from 'react';
import {Route,Switch } from 'react-router-dom';
import Home from './Home';
import Leagues from './Leagues';
import About from './About';
import Navbar from './Navbar';
import Laliga from './Laliga';
import SerieA from './SerieA';
import Epl from './Epl';
import Bundesliga from './Bundesliga'; 
import Report from './Report';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



const App = () =>{

  return(
    <>
      <Navbar />
          <Switch>
           <Route exact path="/" component={Home} />
           <Route exact path="/Leagues" component={Leagues} />
           <Route exact path="/About" component={About} />
           <Route exact path="/Laliga" component={Laliga} />
           <Route exact path="/Epl" component={Epl} />
           <Route exact path="/SerieA" component={SerieA} />
           <Route exact path="/Bundesliga" component={Bundesliga} />
           <Route exact path="/Report" component={Report} />
          </Switch>
    </>
  );
};

export default App;

