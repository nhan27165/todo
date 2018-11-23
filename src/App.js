import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router-dom';
import './App.css';
import Todo from './pages/todo';
import TodoDetail from './pages/todo_detail';
import history from './common/utility/history'

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>

          <Route path='/' exact component={Todo} />
          <Route path='/todo/:id' component={TodoDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
