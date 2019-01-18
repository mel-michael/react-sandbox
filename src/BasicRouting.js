import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Home = () => <h3>Home</h3>;
const About = () => <h3>About</h3>;
const Users = () => <h3>Users</h3>;

class BasicRouting extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <h3>Basic Routing</h3>
            <ul style={{ listStyle: 'none' }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/users">Users</Link></li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/users" component={Users} />
        </div>
      </BrowserRouter>
    );
  }
}

export default BasicRouting;