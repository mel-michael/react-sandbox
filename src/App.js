import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';

// import BasicRouting from './BasicRouting';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <BasicRouting /> */}
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
            <Route render={() => <h3>Oh dear! 404</h3>} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Home = () => <h3>Home</h3>;
const About = () => <h3>About</h3>;
const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>;
const Topics = (props) => {
  console.log('tps >>>>>', props);
  const { match } = props;

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props vs state</Link>
        </li>
      </ul>
      <Route path={`${match.path}/:id`} component={Topic} />
      <Route exact path={match.path} render={() => <h3>Please select a topic</h3>} />
    </div>
  );
}

const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/topics">Topics</Link>
    </li>
  </ul>
);


// class NestedRouting extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <nav>
//             <h3>Basic Routing</h3>
//             <ul style={{ listStyle: 'none' }}>
//               <li><Link to="/">Home</Link></li>
//               <li><Link to="/about">About</Link></li>
//               <li><Link to="/users">Users</Link></li>
//             </ul>
//           </nav>

//         </div>
//       </Router>
//     );
//   }
// }

export default App;
