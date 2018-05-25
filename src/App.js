import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Admin from './containers/Admin';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <div>
            <Link to="/">Home</Link>
            <br/>
            <Link to="/admin">Admin</Link>
          </div>
          <hr />
          <Route exact path="/" component={Home}/>
          <Route path="/admin" component={Admin}/>
        </div>
      </Router>
    );
  }
}

const Home = () => {
  return ( <h1> HOMEEEE </h1>)
}

export default App;
