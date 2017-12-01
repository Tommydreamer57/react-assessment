import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import { Route, Switch } from 'react-router-dom';

import Auth from './views/Auth/Auth';
import Browse from './views/Browse/Browse';
import Details from './views/Details/Details';
import Cart from './views/Cart/Cart';
import Shelf from './views/Shelf/Shelf';
import Add from './views/Add/Add';
import Edit from './views/Edit/Edit';

import Navbar from './components/Navbar/Navbar';

import './views/views.css';
import './components/components.css';


class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      password: '',
      user: {
        username: '',
        password: '',
        userid: 0
      },
      cart: [ // array of book objects
        {
          id: 0,
          title: '',
          author: '',
          genre: '',
          description: '',
          stock: 0,
          imgurl: ''
        }
      ],
      shelf: [], // books just like cart
    }
  }

  // AUTH FUNCTIONS
  handleChange = (target, value) => {
    this.setState({
      [target]: value
    })
  }
  register = () => {
    // create user
  }
  login = () => {
    // log in user
  }
  logout = () => {
    // log out user
  }

  render() {
    return (
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/"
              render={props => (
                <Auth {...props}
                  username={this.state.username}
                  password={this.state.password}
                  handleChange={this.handleChange}
                  register={this.register}
                  login={this.login} />
              )}
            />
            <Route path="/browse"
              render={props => (
                <Browse {...props}
                  app={this.state}
                />
              )}
            />
            <Route path="/details/:id"
              render={props => (
                <Details {...props}
                  app={this.state}
                />
              )}
            />
            <Route path="/cart"
              render={props => (
                <Cart {...props}
                  app={this.state}
                />
              )}
            />
            <Route path="/shelf"
              render={props => (
                <Shelf {...props}
                  app={this.state}
                />
              )}
            />
            <Route path="/add"
              render={props => (
                <Add {...props}
                  app={this.state}
                />
              )}
            />
            <Route path="/edit/:id"
              render={props => (
                <Edit {...props}
                  app={this.state}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
