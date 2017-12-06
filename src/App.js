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
import DoNothing from './views/DoNothing/DoNothing';

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
        id: 0
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
  register = (username, password) => {
    // console.log(arguments)
    return axios.post(`http://localhost:3003/register`, { username, password })
      .then(response => {
        console.log(response.data)
        this.setState({
          user: response.data
        })
        return response.data
      })
  }
  login = (username, password) => {
    console.log(username, password)
    return axios.post(`http://localhost:3003/login`, { username, password })
      .then(response => {
        console.log(response.data)
        this.setState({
          user: response.data
        })
        return response.data
      })
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
                  /* username={this.state.username} */
                  /* password={this.state.password} */
                  /* handleChange={this.handleChange} */
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
                  user={this.state.user}
                  cart={this.state.cart}
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
            <Route path="/" component={DoNothing} />
          </Switch>
        </div>
        <div id="content2" className="content">
          <div id="child1" className="child" />
          <div id="child2" className="child" />
          <div id="child3" className="child" />
          <div id="child4" className="child" />
          <div id="child5" className="child" />
          <div id="child6" className="child" />
          <p id="1">TEXT TEXT TEXT TEXT TEXT</p>
          <p id="2">TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT <div id="float"></div> TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT </p>
          <p id="3">TEXT TEXT TEXT TEXT TEXT</p>
          <p id="4">TEXT TEXT TEXT TEXT TEXT</p>
          <p id="5">TEXT TEXT TEXT TEXT TEXT</p>
          <div className='my-picture' height="100px" width="100px" />
        </div>
      </div>
    );
  }
}

export default App;
