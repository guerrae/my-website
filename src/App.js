import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

//import pages
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Games from './Pages/Games';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path = "/" exact component = {Home}/>
          <Route path = "/about" component = {About}/>
          <Route path = "/contact" component = {Contact}/>
          <Route path = "/games/:gameComponent" component = {Games}/>
          <Route path = "/projects/:projectComponent" component = {Projects}/>
          <Route path = "*" component = {Home}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;